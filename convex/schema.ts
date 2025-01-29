// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
// export const card = v.object({
//   id: v.string(),
//   color: v.union(
//     v.literal("Red"),
//     v.literal("Blue"),
//     v.literal("Green"),
//     v.literal("Yellow"),
//     v.literal("Wild")
//   ),
//   type: v.union(
//     v.literal("number"),
//     v.literal("Skip"),
//     v.literal("Reverse"),
//     v.literal("Draw2"),
//     v.literal("Wild"),
//     v.literal("Wild-Draw4")
//   ),
//   value: v.optional(v.string()),
// });

// export const gameState = v.object({
//   deck: v.array(card),
//   discardPile: v.array(card),
//   playerHands: v.array(
//     v.object({
//       userId: v.id("users"),
//       cards: v.array(card),
//     })
//   ),
//   currentPlayer: v.id("users"),
//   playDirection: v.union(
//     v.literal("clockwise"),
//     v.literal("counter-clockwise")
//   ),
//   currentColor: v.union(
//     v.literal("Red"),
//     v.literal("Blue"),
//     v.literal("Green"),
//     v.literal("Yellow")
//   ),
//   pendingDraws: v.number(),
//   pendingChallenge: v.optional(
//     v.object({
//       challenger: v.id("users"),
//       target: v.id("users"),
//     })
//   ),
//   gamePhase: v.union(
//     v.literal("waiting"),
//     v.literal("playing"),
//     v.literal("challenge"),
//     v.literal("ended")
//   ),
//   winner: v.optional(v.id("users")),
//   actionLog: v.array(
//     v.object({
//       type: v.string(),
//       player: v.id("users"),
//       card: v.optional(card),
//       timestamp: v.number(),
//     })
//   ),
//   unoStatus: v.array(
//     v.object({
//       player: v.id("users"),
//       called: v.boolean(),
//       valid: v.boolean(),
//     })
//   ),
//   turnTimeout: v.number(),
//   lastActionTime: v.number(),
// });
export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    username: v.string(),
    email: v.string(),
    friends: v.array(v.id("users")),
    isOnline: v.boolean(),
    lastOnline: v.number(),
    avatar: v.string(),
    gameHistory: v.array(v.id("matches")),
  }).index("by_clerkId", ["clerkId"]),

  rooms: defineTable({
    roomId: v.string(),
    players: v.array(v.id("users")),
    maxPlayers: v.number(),
    status: v.union(
      v.string()
    ),
    gameState: v.any(),
    createdAt: v.number(),
  }).index("by_roomId", ["roomId"]),

  friends: defineTable({
    user1: v.id("users"),
    user2: v.id("users"),
    status: v.union(v.literal("pending"), v.literal("accepted")),
  }),

  messages: defineTable({
    roomId: v.id("rooms"),
    sender: v.id("users"),
    content: v.string(),
    type: v.union(v.literal("text"), v.literal("emoji")),
    timestamp: v.number(),
  }),

  matches: defineTable({
    players: v.array(v.id("users")),
    winner: v.id("users"),
    startTime: v.number(),
    endTime: v.number(),
    moves: v.array(v.any()),
  }),
});
