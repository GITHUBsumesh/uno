import WaitRoomClient from "./WaitRoomClient";

// const fetchRoomData = async (roomId: string) => {
//     // Simulating an async operation, like fetching room details
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // Example delay
//     return { roomId, noofPlayers}; // Return fetched data
//   };
const WaitRoomAsync = async ({
  params,
}: {
  params: { roomid: string; noofPlayers: number };
}) => {
  const roomId = (await params).roomid;
  const noofPlayers = (await params).noofPlayers;
  // const { roomId, noofPlayers } = await fetchRoomData(params.roomid); // Fetch async data

  return <WaitRoomClient roomId={roomId} noofPlayers={noofPlayers} />;
};

export default WaitRoomAsync;
