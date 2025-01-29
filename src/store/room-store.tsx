"use client"
import { create } from "zustand";
import { useAuth, UseAuthStore } from "./auth-store";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import toast from "react-hot-toast";
import { useEffect } from "react";

interface RoomStore {
  joinRoom: (roomId: string) => Promise<{ success: boolean; message: string } | undefined>;
  createRoom: (maxPlayers: number) => Promise<string | undefined>;
  exitRoom : (roomId: string) => Promise<{ success: boolean; message: string } | undefined>;
}

export const UseRoomStore = create<RoomStore>(() => ({
  joinRoom: async () => {
    toast.error("joinRoom called before initialization");
    return { success: false, message: "joinRoom called before initialization" };
  },
  exitRoom : async ()=>{
    toast.error("exitRoom called before initialization");
    return { success: false, message: "exitRoom called before initialization" };
  },
  createRoom: async () => {
    toast.error("createRoom called before initialization");
    return "";
  },
}));

export const useRoomStoreWithMutation = () => {
    const joinRoom = useMutation(api.rooms.joinRoom);
    const createRoom = useMutation(api.rooms.createRoom);
    const exitRoom = useMutation(api.rooms.exitRoom);
  useAuth()
    useEffect(() => {
      
      UseRoomStore.setState({
        joinRoom: async (roomId: string) => {
          const authUser = UseAuthStore.getState().authUser;
          if (!authUser) {
            toast.error("User not authenticated");
            return;
          }
          try {
            const response = await joinRoom({
              userId: authUser._id,
              roomId: roomId,
            });
  
            if (!response.success) {
              toast.error(response.message);
              return;
            } else {
              toast.success(response.message);
              // UseGameStore.getState().setRoom(roomId)
              // UseGameStore.getState().setPlayers(authUser)
            }
            return response
          } catch (err) {
            toast.error(err || "Something went wrong. Please try again.");
          }
        },
        exitRoom: async (roomId: string)=>{
          const authUser = UseAuthStore.getState().authUser;
          if (!authUser) {
            toast.error("User not authenticated");
            return;
          }
          try {
            const response = await exitRoom({ userId: authUser._id, roomId });
            return response
          } catch (err) {
            toast.error(err || "Failed to exit room");
          }
        },

        createRoom: async (maxPlayers: number) => {
          const authUser = UseAuthStore.getState().authUser;
          if (!authUser) {
            toast.error("User not authenticated");
            return "";
          }
          try {
            const roomId: string = await createRoom({
              userId: authUser._id,
              maxPlayers,
            });
            toast.success(`Created room with ID: ${roomId}`);
            // UseGameStore.getState().setRoom(roomId)
            // UseGameStore.getState().setPlayers(authUser)
            return roomId;
          } catch (err) {
            toast.error(err);
          }
        },
      });
    }, [joinRoom, createRoom,exitRoom]); // UseEffect ensures it runs only when these dependencies change
  };
  
