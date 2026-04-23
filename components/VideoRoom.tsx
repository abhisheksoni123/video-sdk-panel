"use client";

import { useState, useTransition } from "react";
import { sendEvent } from "@/lib/api";

type VideoRoomProps = {
  sessionId: string;
};

export default function VideoRoom({ sessionId }: VideoRoomProps) {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState(
    "Ready to send a mock meeting-ended event.",
  );

  const handleSendEvent = async () => {
    setStatus("Sending event...");

    try {
      const result = await sendEvent({
        sessionId,
        organizationId: "org_demo_001",
        eventType: "meeting-ended",
        idempotencyKey: `${sessionId}-${Date.now()}`,
      });

      setStatus(
        result.duplicate
          ? "Duplicate event ignored by the API."
          : "Event accepted and queued for processing.",
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to send event.";
      setStatus(message);
    }
  };

  return (
    <div className="stack">
      <button
        className="button mutedButton"
        disabled={pending}
        onClick={() => startTransition(handleSendEvent)}
        type="button"
      >
        {pending ? "Sending event..." : "Trigger Meeting Ended"}
      </button>

      <div className="statusCard">
        <p className="statusLabel">Ingestion status</p>
        <p className="statusText">{status}</p>
      </div>
    </div>
  );
}
