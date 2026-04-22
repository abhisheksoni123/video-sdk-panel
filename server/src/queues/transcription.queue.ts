import { Queue } from "bullmq";
import { redisConnection } from "../config/redis";

export const transcriptionQueue = new Queue("transcription-queue", {
  connection: redisConnection,
});
