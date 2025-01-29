"use client"
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import Player from "@/components/Room/Player";
import useBackHandler from "@/Hooks/useBackHandler";
import "../../roomstyles.css"
const WaitRoomClient = ({ roomId, noofPlayers }: { roomId: string; noofPlayers: number }) => {
 const router = useRouter()
 const startGame = useMutation(api.rooms.startGame)
// Maximum 9 players for a 3x3 grid
 const handleStartGame = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!roomId.trim()) return; // Prevent empty submission
    await startGame({ roomId });
    // router.push(`/${noofPlayers}/${roomId}/game`); // Redirect to room page
  };
  useBackHandler(roomId)
  const room= useQuery(api.rooms.getRoomStatus, {roomId})
  const totalPlayers =room?.maxPlayers
  const currentPlayers = room?.players.length
  const playersToJoin = totalPlayers! - currentPlayers!
  const waiting = `Waiting for ${playersToJoin} Player${playersToJoin>1?"s":""} to join`;
  const starting = `Click on start to begin`
  const [isDisabled,setIsDisabled] = useState(true)
  useEffect(() => {
    if (room?.status === "playing") {
      router.push(`/${noofPlayers}/${roomId}/game`);
    }
  }, [room?.status, router, noofPlayers, roomId]);
  useEffect(()=>{
    if(playersToJoin==0) setIsDisabled(false)
      else setIsDisabled(true)
  },[playersToJoin])
  return (
    <div className="h-screen flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="max-h-[26rem] w-[22rem] flex flex-col justify-center items-center gap-4 py-2 glass">
        <CardTitle className="text-[1.5rem]">Room {roomId}</CardTitle>
        <CardDescription>{playersToJoin>0?waiting:starting}</CardDescription>
        <CardContent className="flex flex-col items-center gap-4 w-full">
          {/* 3x3 Grid Layout */}
          <div className="grid grid-cols-3 gap-x-10 gap-y-4">
            {room?.players.map((player, index) => (
                <div key={index}>
                  <Player player={player}/>
              </div>
            ))}
          </div>
          {/* Start Button */}
          <Button variant="destructive" className="w-full" onClick={handleStartGame} disabled={isDisabled}>
            Start
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaitRoomClient;
