import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

const Player = ({ player }: { player: Id<"users"> }) => {
  const playerDetail = useQuery(api.users.getUser, { userId: player });
  return (
    <>
      <div className="flex flex-col items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={playerDetail?.avatar} />
          <AvatarFallback>{playerDetail?.username}</AvatarFallback>
        </Avatar>
        <p className="text-sm text-muted-foreground text-center truncate w-[8ch] overflow-hidden">
          {playerDetail?.username}
        </p>
      </div>
    </>
  );
};

export default Player;
