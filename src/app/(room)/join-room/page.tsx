"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "../../../components/ui/card";
import "../roomstyles.css";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseRoomStore, useRoomStoreWithMutation } from "@/store/room-store";
const Join_Room = () => {
  const [roomId, setRoomId] = useState(""); // Store Room ID input
  const router = useRouter(); // Next.js Router for navigation
  const [noofPlayers, setNoOfPlayers] = useState<string | undefined>();
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (roomId.trim().length === 8 && noofPlayers) {
      setIsDisabled(false);
    }
  }, [roomId, noofPlayers]);
  useRoomStoreWithMutation(); // Ensure mutations are set in Zustand
  const joinRoom = UseRoomStore((state) => state.joinRoom);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await joinRoom(roomId);
    if (res?.success) router.push(`/${noofPlayers}/${roomId}`);
  };
  return (
    <div className="h-screen flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="h-[16rem] w-[16rem] flex flex-col justify-center items-center gap-2  p-0 glass">
        <CardTitle className="mb-4 text-[1.5rem] pt-2">Join Room </CardTitle>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-2"
          >
            <div>
              <Label>Room For</Label>
              <Select onValueChange={(value) => setNoOfPlayers(value)}>
                <SelectTrigger className="w-[13rem]">
                  <SelectValue
                    placeholder="No of Players"
                    className="text-sm text-muted-foreground"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>No of players</SelectLabel> */}
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Label>Room ID</Label>
              <Input
                type="text"
                placeholder="Enter Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <Button
              variant="destructive"
              className="w-full"
              type="submit"
              disabled={isDisabled}
            >
              Join Room
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Join_Room;
