import { Worker } from "bullmq";
import { redisConnection } from "../config/redis";
import Report from "../models/report.model";
import { generateReport } from "../services/ai.service";

new Worker(
  "ai-queue",
  async (job) => {
    const report = await generateReport();

    await Report.create({
      sessionId: job.data.sessionId,
      ...report,
    });
  },
  { connection: redisConnection },
);
