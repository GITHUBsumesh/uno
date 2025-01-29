import { Id } from "../../convex/_generated/dataModel";
export type User = {
  _id: Id<"users">;
  _creationTime: number;
  clerkId: string;
  username: string;
  email: string;
  friends: Id<"users">[];
  isOnline: boolean;
  lastOnline: number;
  avatar: string;
  gameHistory: Id<"matches">[];
};

export type Matches = {
  players: Id<"users">[];
  winner: Id<"users">;
  startTime: number;
  endTime: number;
  moves: [];
};