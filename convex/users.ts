import { ConvexError, v } from "convex/values";
import { internalMutation, query } from "./_generated/server";
export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
    username: v.string(),
    email: v.string(),
    avatar: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      username: args.username,
      avatar: args.avatar,
      isOnline: true,
      friends: [],
      gameHistory: [],
      lastOnline: Date.now(),
    });
  },
});
export const getMe = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Unauthorized");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.tokenIdentifier))
      .unique();

    if (!user) {
    	throw new ConvexError("User not found");
    }

    return user;
  },
});

export const getUser = query({
  args: {userId: v.id("users")},
  handler: async (ctx,args) => {
    const user = await ctx.db
      .get<"users">(args.userId)
    if (!user) {
    	throw new ConvexError("User not found");
    }
    return user;
  },
});
