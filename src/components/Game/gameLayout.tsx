"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import "./styles.css";
import UnoCard from "@/Card_Details/UnoCard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { UseAuthStore } from "@/store/auth-store";
export const GameTable = () => {
  return (
    <div className="h-screen flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[32rem] h-[12rem] bg-yellow-400 table justify-center items-center ">
        <CardContent className=" w-[28rem] h-[9rem] flex flex-row items-center justify-evenly pt-6 px-0">
          <UnoCard back={true} height={160} width={100} />
          <UnoCard
            color="Blue"
            type="number"
            value={5}
            height={150}
            width={95}
          />
        </CardContent>
      </Card>
    </div>
  );
};

const PlayerAvatar = ({ player }: { player: Id<"users"> }) => {
  const playerDetail = useQuery(api.users.getUser, { userId: player });
  return (
    <Avatar className="w-[4rem] h-[4rem] ">
      <AvatarImage src={playerDetail?.avatar} />
      <AvatarFallback>{playerDetail?.username}</AvatarFallback>
    </Avatar>
  );
};

const People2 = ({ players }: { players: Id<"users">[]|undefined }) => {
  return (
    <>
      <div className={`absolute ml-[45rem] mt-[1rem] `}>
        <PlayerAvatar  player={players![0]}/>
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};
const People3 = ({ players }: { players: Id<"users">[]|undefined }) => {
  return (
    <>
      <div className={`absolute ml-[25rem] mt-[5rem] `}>
        <PlayerAvatar player={players![0]}/>
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[65rem] mt-[5rem] `}>
        <PlayerAvatar player={players![1]}/>
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-2 -translate-y-3 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] -translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};
const People4 =({ players }: { players: Id<"users">[]|undefined }) => {
  return (
    <>
      <div className={`absolute mt-[50vh] ml-[10rem] `}>
        <PlayerAvatar player={players![1]}/>
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[45rem] mt-[1rem] `}>
        <PlayerAvatar player={players![1]}/>
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 mt-[50vh] mr-[10rem] `}>
        <PlayerAvatar player={players![2]} />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};
const People5 = () => {
  return (
    <>
      <div className={`absolute  bottom-0 mb-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[25rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[65rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-2 -translate-y-3 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] -translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};
const People6 = () => {
  return (
    <>
      <div className={`absolute  bottom-0 mb-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute mt-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[45rem] mt-[1rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};
const People7 = () => {
  return (
    <>
      <div className={`absolute  bottom-0 mb-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute mt-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[25rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[65rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-2 -translate-y-3 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] -translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};
const People8 = () => {
  return (
    <>
      <div className={`absolute bottom-0  ml-[20rem] mb-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>

      <div className={`absolute mt-[50vh] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[25rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[45rem] mt-[1rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[65rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-2 -translate-y-3 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] -translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 mt-[50vh] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute  bottom-0 ml-[70rem] mb-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};
const People9 = () => {
  return (
    <>
      <div className={`absolute bottom-0  ml-[20rem] mb-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute  bottom-0 mb-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute mt-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>

      <div className={`absolute ml-[25rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[65rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-2 -translate-y-3 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] -translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute  bottom-0 ml-[70rem] mb-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};
const People10 = () => {
  return (
    <>
      <div className={`absolute bottom-0  ml-[20rem] mb-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute  bottom-0 mb-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute mt-[15rem] ml-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>

      <div className={`absolute ml-[25rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[45rem] mt-[1rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute ml-[65rem] mt-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-2 -translate-y-3 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] -translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
      <div className={`absolute  bottom-0 ml-[70rem] mb-[5rem] `}>
        <PlayerAvatar />
        <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
          <UnoCard back={true} width={42} height={70} />
          <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
            3
          </span>
        </div>
        <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
          {/* {counter} */}
        </span>
      </div>
    </>
  );
};

export const GamePeople = ({ noofPlayers,roomId }: { noofPlayers: number,roomId :string }) => {
const room= useQuery(api.rooms.getRoomStatus, {roomId})
const players =room?.players
const {authUser}= UseAuthStore()
const otherPlayers = players!.filter(player => player !== authUser?._id);
  // const [counter, setCounter] = useState(30);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter((prevCounter) => {
  //       if (prevCounter > 0) {
  //         return prevCounter - 1;
  //       }
  //       clearInterval(timer);
  //       return 0;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);
  // return (
  //   <>
  //     <div className="top_section">
  //       <div
  //         className={`absolute ml-[25rem] mt-[5rem] ${noofPlayers % 2 === 0 && noofPlayers != 10 && noofPlayers != 8 ? "hidden" : ""}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //       <div
  //         className={`absolute ml-[45rem] mt-[1rem] ${noofPlayers % 2 !== 0 ? "hidden" : ""}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-2 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //       <div
  //         className={`absolute ml-[65rem] mt-[5rem] ${noofPlayers % 2 === 0 && noofPlayers != 10 && noofPlayers != 8 ? "hidden" : ""}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[2rem] translate-x-[3rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute -translate-x-2 -translate-y-3 bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] -translate-x-[0rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //     </div>
  //     <div className="bottom_section">
  //       <div
  //         className={`absolute bottom-0  ml-[20rem] mb-[5rem] ${noofPlayers >= 8 ? "" : "hidden"}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //       <div
  //         className={`absolute  bottom-0 ml-[70rem] mb-[5rem] ${noofPlayers >= 8 ? "" : "hidden"}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //     </div>
  //     <div className="left_section">
  //       <div
  //         className={`absolute mt-[15rem] ml-[10rem] ${noofPlayers > 5 && noofPlayers != 8 ? "" : "hidden"}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //       <div
  //         className={`absolute  bottom-0 mb-[15rem] ml-[10rem] ${noofPlayers < 5 || noofPlayers == 8 ? "hidden" : ""}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //       <div
  //         className={`absolute mt-[50vh] ml-[10rem] ${noofPlayers % 4 == 0 ? "" : "hidden"}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[6rem] translate-x-[3rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute translate-x-[2rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //     </div>
  //     <div className="right_section">
  //       <div
  //         className={`absolute right-0 mt-[15rem] mr-[10rem] ${noofPlayers > 5 && noofPlayers != 8 ? "" : "hidden"}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //       <div
  //         className={`absolute right-0 bottom-0 mb-[15rem] mr-[10rem] ${noofPlayers < 5 || noofPlayers == 8 ? "hidden" : ""}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //       <div
  //         className={`absolute right-0 mt-[50vh] mr-[10rem] ${noofPlayers % 4 == 0 ? "" : "hidden"}`}
  //       >
  //         <PlayerAvatar />
  //         <div className="absolute -translate-y-[6rem] -translate-x-[1rem] ">
  //           <UnoCard back={true} width={42} height={70} />
  //           <span className="text-black font-sans absolute -translate-x-[1rem] -translate-y-[5rem] bg-green-600 rounded-xl w-6 h-6 flex items-center justify-center text-lg">
  //             3
  //           </span>
  //         </div>
  //         <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
  //           {/* {counter} */}
  //         </span>
  //       </div>
  //     </div>
  //   </>
  // );
 
  switch (Number(noofPlayers)) {
    case 2: return <People2 players={otherPlayers}/>
    case 3: return <People3 players={otherPlayers}/>
    case 4: return <People4 players={otherPlayers}/>
    case 5: return <People5/>
    case 6: return <People6/>
    case 7: return <People7/>
    case 8: return <People8/>
    case 9: return <People9/>
    case 10: return <People10/>
    default: return <h1>Error</h1>
  }
};

export const GameButton = () => {
  return (
    <div className="absolute bottom-0 right-0 mr-10 mb-10 flex flex-row gap-4">
      <Button
        variant="outline"
        className="bg-yellow-300 hover:bg-yellow-600 border-none"
      >
        Uno
      </Button>
      <Button
        variant="outline"
        className="bg-red-500 hover:bg-red-800 border-none"
      >
        Challenge
      </Button>
    </div>
  );
};

export const GameUser = ({ roomId }: {roomId :string }) => {
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        }
        clearInterval(timer);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const {authUser}= UseAuthStore()
  const room= useQuery(api.rooms.getRoomStatus, {roomId})
  const players =room?.players
  const authPlayer = players!.find(player => player === authUser?._id);
  return (
    <div className="absolute bottom-0 ml-[45rem] mb-[1rem] user">
      <PlayerAvatar player={authPlayer!}/>
      <div className="absolute -translate-y-[10rem] -translate-x-[0rem] flex flex-row justify-center">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className={`relative flex-none transition-transform duration-300 ease-in-out
          ${index !== 0 ? "-ml-9" : ""} hover:-translate-y-[1rem] hover:z-10`}
            style={{ zIndex: index }}
          >
            <UnoCard back={true} width={60} height={100} />
          </div>
        ))}
      </div>
      <span className="absolute -translate-y-[1rem] translate-x-[3rem] bg-black text-white w-6 rounded-md flex flex-row justify-center items-center">
        {counter}
      </span>
    </div>
  );
};
