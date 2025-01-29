"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import "../roomstyles.css";
import { useRouter } from "next/navigation";
import { UseRoomStore, useRoomStoreWithMutation } from "@/store/room-store";
const Create_Room = () => {
  // const createRoom = useMutation(api.rooms.createRoom);
  const [noofPlayers, setNoOfPlayers] = useState<string | undefined>();
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (noofPlayers) {
      setIsDisabled(false);
    }
  }, [noofPlayers]);
  // useAuth()
  useRoomStoreWithMutation(); 
  const createRoom = UseRoomStore((state) => state.createRoom);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const roomId = await createRoom(Number(noofPlayers));
    if(roomId) router.push(`/${noofPlayers}/${roomId}`);
  };
  return (
    <div className="h-screen flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <Card className="h-[12rem] w-[16rem] flex flex-col justify-between items-center gap-2 p-0 glass ">
        <CardTitle className="mb-4 text-[1.4rem] mt-2">Create Room </CardTitle>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-2"
          >
            <div>
              {/* <Label>No Of Players</Label> */}
              <Select onValueChange={(value) => setNoOfPlayers(value)}>
                <SelectTrigger className="w-[13rem]">
                  <SelectValue placeholder="No of Players" />
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
            </div>
            <Button
              variant="destructive"
              className="w-full"
              disabled={isDisabled}
            >
              Create Room
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Create_Room;
