// convex/rooms.ts
import { internalMutation, mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createRoom = mutation({
  args: { userId: v.id("users"), maxPlayers: v.number() },
  handler: async (ctx, args) => {
    const generateRoomId = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return Array.from(
        { length: 8 },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join("");
    };

    let roomId: string;
    do {
      roomId = generateRoomId();
    } while (
      await ctx.db
        .query("rooms")
        .withIndex("by_roomId", (q) => q.eq("roomId", roomId))
        .first()
    );

    await ctx.db.insert("rooms", {
      roomId,
      players: [args.userId],
      maxPlayers: args.maxPlayers,
      status: "waiting",
      createdAt: Date.now(),
      gameState:null
    });

    return roomId;
  },
});

export const joinRoom = mutation({
  args: { userId: v.id("users"), roomId: v.string() },
  handler: async (ctx, args) => {
    const room = await ctx.db
      .query("rooms")
      .withIndex("by_roomId", (q) => q.eq("roomId", args.roomId))
      .first();
    if (!room) {
      return { success: false, message: "Room does not exist" };
    }
    if (room.status !== "waiting") {
      return { success: false, message: "Room has already started" };
    }
    if(room.players.includes(args.userId)){
      return { success: true, message: "Joined room successfully" };
    }
    if (room.players.length >= room.maxPlayers) {
      return { success: false, message: "Room is full" };
    }
    await ctx.db.patch(room._id, {
      players: [...room.players, args.userId],
    });
    if(room.players.length===room.maxPlayers){
      await ctx.db.patch(room._id,{
        status:"playing"
      })
    }
    return { success: true, message: "Joined room successfully" };
  },
});

export const exitRoom = mutation({
  args: { userId: v.id("users"), roomId: v.string() },
  handler: async (ctx, args) => {
    const room = await ctx.db
      .query("rooms")
      .withIndex("by_roomId", (q) => q.eq("roomId", args.roomId))
      .first();

    if (!room) {
      return { success: false, message: "Room does not exist" };
    }

    if (!room.players.includes(args.userId)) {
      return { success: false, message: "User is not in this room" };
    }

    // Remove the user from the players list
    const updatedPlayers = room.players.filter((id) => id !== args.userId);

    await ctx.db.patch(room._id, {
      players: updatedPlayers,
    });

    return { success: true, message: "Exited room successfully" };
  },
});

export const deleteRoom = mutation({
  args: { roomId: v.string() },
  handler: async (ctx, args) => {
    // Find the room by roomId
    const room = await ctx.db
      .query("rooms")
      .withIndex("by_roomId", (q) => q.eq("roomId", args.roomId))
      .first();

    // If room does not exist, return an error
    if (!room) {
      return { success: false, message: "Room does not exist" };
    }
    // Delete the room from the database
    await ctx.db.delete(room._id);

    return { success: true, message: "Room deleted successfully" };
  },
});

export const deleteEmptyRooms = internalMutation({
  handler: async (ctx) => {
    const now = Date.now();
    const EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutes

    // Fetch all rooms
    const rooms = await ctx.db.query("rooms").collect();

    for (const room of rooms) {
      // Check if the room is empty & older than expiration time
      if (room.players.length === 0 && now - room.createdAt > EXPIRATION_TIME) {
        await ctx.db.delete(room._id);
        console.log(`Deleted empty room: ${room.roomId}`);
      }
    }
  },
});

export const getRoomStatus = query({
  args: { roomId: v.string() },
  handler: async (ctx, args) => {
    const room = await ctx.db
      .query("rooms")
      .withIndex("by_roomId", (q) => q.eq("roomId", args.roomId))
      .first();
    return room;
  },
});


export const startGame = mutation({
  args: { roomId: v.string() },
  handler: async (ctx, args) => {
    const room = await ctx.db
    .query("rooms")
    .withIndex("by_roomId", (q) => q.eq("roomId", args.roomId))
    .first();
  if (!room || room.status !== "waiting") throw new Error("Invalid game state");

  await ctx.db.patch(room._id, { status: "playing" });
}
});


// export const sendMessage = mutation({
//   args: { roomId: v.id("rooms"), userId: v.id("users"), content: v.string(), type: v.string() },
//   handler: async (ctx, args) => {
//     await ctx.db.insert("messages", {
//       roomId: args.roomId,
//       sender: args.userId,
//       content: args.content,
//       type: args.type,
//       timestamp: Date.now(),
//     });
//   }
// });

// More functions for game logic, friend management, etc.
