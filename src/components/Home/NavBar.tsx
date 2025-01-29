"use client"
import React, {  } from "react";
import "./navstyles.css"
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
const NavBar = () => {
  return (<>
    <div className="h-[50px]  text-white  flex items-center justify-between  px-4">
        <div className="left text-3xl">UNO</div>
        <div className="right ">
            <ul className="flex space-x-5 gap-6 text-white flex-row items-center justify-center">
              <Link href={"/"} ><li className="nav-link" >Home</li></Link>
              <Link href={"/join-room"}><li className="nav-link" >Join Room</li></Link>
              <Link href={"/create-room"}><li className="nav-link" >Create Room</li> </Link>
              <UserButton/>
            </ul>
        </div>
    </div>

    </>
  );
};

export default NavBar;
