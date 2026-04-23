import Session from "../models/session.model";
import { transcriptionQueue } from "../queues/transcription.queue";

type InterviewEvent = {
  sessionId: string;
  eventType: string;
};

export const handleEvent = async (event: InterviewEvent) => {
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
