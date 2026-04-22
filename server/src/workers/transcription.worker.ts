import { Worker } from "bullmq";
import { redisConnection } from "../config/redis";
import Transcript from "../models/transcript.model";
import { generateMockTranscript } from "../services/transcription.service";
import { aiQueue } from "../queues/ai.queue";

new Worker(
  "transcription-queue",
  async (job) => {
    const transcript = generateMockTranscript(job.data.sessionId);

    await Transcript.create(transcript);

    await aiQueue.add("ai-score", { sessionId: job.data.sessionId });
  },
  { connection: redisConnection },
);
