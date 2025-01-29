"use client";
import { useQuery } from "convex/react";
import { create } from "zustand";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";
import { User } from "./schemaType";

export interface AuthStore {
  authUser: User | undefined | null;
  setAuthUser: (user: User | null) => void;  
}

export const UseAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  setAuthUser: (user: User | null) => {
    set({ authUser: user });
    // console.log("user:",user);
  },
}));

export const useAuth = () => {
  const me = useQuery(api.users.getMe);
  const setAuthUser = UseAuthStore((state) => state.setAuthUser);

  useEffect(() => {
    setAuthUser(me ?? null); // Ensure null is set if `me` is undefined
  }, [me, setAuthUser]);

  return me; // Return the user data for direct usage if needed
};
