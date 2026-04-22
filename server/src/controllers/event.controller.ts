import Event from "../models/event.model";
import { eventQueue } from "../queues/event.queue";

export const ingestEvent = async (req, res) => {
  const { sessionId, organizationId, eventType, payload, idempotencyKey } =
    req.body;

  try {
    const event = await Event.create({
      sessionId,
      organizationId,
      eventType,
      payload,
      idempotencyKey,
    });

    await eventQueue.add("process-event", { eventId: event._id });

    res.json({ success: true });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.json({ success: true, duplicate: true });
    }
    res.status(500).json({ error: err.message });
  }
};
