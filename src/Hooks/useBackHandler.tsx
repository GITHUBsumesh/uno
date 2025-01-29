import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { UseRoomStore, useRoomStoreWithMutation } from "@/store/room-store";

const useBackHandler = (roomId: string) => {
  const router = useRouter();
  useRoomStoreWithMutation(); // Ensure mutations are initialized
  const exitRoom = UseRoomStore((state) => state.exitRoom);

  // Function to exit the room
  const handleExit = useCallback(async () => {
    try {
      const res = await exitRoom(roomId);
      if (res?.success) {
        console.log("User exited the room");
      } else {
        console.error("Failed to exit room:", res?.message);
      }
    } catch (error) {
      console.error("Error exiting room:", error);
    }
  }, [roomId, exitRoom]);

  // Handle back navigation
  const handleBack = useCallback(
    async (event: PopStateEvent) => {
      event.preventDefault();

      const confirmLeave = window.confirm("Are you sure you want to leave the room?");
      if (!confirmLeave) {
        history.pushState(null, "", location.href); // Prevent accidental back navigation
        return;
      }

      await handleExit();
      router.push("/"); // Redirect to home page
    },
    [router, handleExit]
  );

  // Handle page unload (detect refresh vs. tab close)
  const handleBeforeUnload = useCallback(async () => {
    if (sessionStorage.getItem("isReloading")) {
      sessionStorage.removeItem("isReloading"); // Clear the flag after reload
    } else {
      await handleExit(); // Exit only if the user is closing the tab or navigating away
    }
  }, [handleExit]);

  useEffect(() => {
    // Push state to prevent accidental back navigation
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", handleBack);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handleBack);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBack, handleBeforeUnload]);

  // Set a flag before refreshing
  useEffect(() => {
    const handleRefresh = () => sessionStorage.setItem("isReloading", "true");
    window.addEventListener("beforeunload", handleRefresh);
    return () => window.removeEventListener("beforeunload", handleRefresh);
  }, []);

  return null; // Hook doesn't return JSX
};

export default useBackHandler;
