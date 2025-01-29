
import { cronJobs } from "convex/server";

import { internal } from "./_generated/api";

const crons = cronJobs()

crons.interval(
  "delete empty rooms",
  {minutes : 5},
  internal.rooms.deleteEmptyRooms
)
export default crons;