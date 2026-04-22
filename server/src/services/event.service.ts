import Session from "../models/session.model";
import { transcriptionQueue } from "../queues/transcription.queue";

export const handleEvent = async (event) => {
  switch (event.eventType) {
    case "meeting-started":
      await Session.findByIdAndUpdate(event.sessionId, { status: "LIVE" });
      break;

    case "meeting-ended":
      await Session.findByIdAndUpdate(event.sessionId, {
        status: "PROCESSING",
      });

      await transcriptionQueue.add("transcribe", {
        sessionId: event.sessionId,
      });
      break;
  }
};
