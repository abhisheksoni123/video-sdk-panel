import { Worker } from "bullmq";
import { redisConnection } from "../config/redis";
import Event from "../models/event.model";
import { handleEvent } from "../services/event.service";

new Worker(
  "event-queue",
  async (job) => {
    const event = await Event.findById(job.data.eventId);
    if (!event) return;

    await handleEvent(event);

    event.processedAt = new Date();
    await event.save();
  },
  { connection: redisConnection },
);
