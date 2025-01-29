/* eslint-disable @typescript-eslint/no-unused-vars */
import { GamePeople, GameUser } from '@/components/Game/gameLayout'
import React from 'react'

const page = async ({
  params,
}: {
  params: { roomid: string; noofPlayers: number };
}) => {
  const roomId = (await params).roomid;
  const noofPlayers = (await params).noofPlayers;
  
  return (
    <div>
      <GamePeople noofPlayers={noofPlayers} roomId={roomId}/>
      <GameUser roomId={roomId}/>
    </div>
  )
}

export default page