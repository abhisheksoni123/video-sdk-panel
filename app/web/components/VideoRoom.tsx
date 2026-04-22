"use client";

export default function VideoRoom() {
  const sendEvent = async () => {
    await fetch("http://localhost:5000/api/events/ingest", {
      method: "POST",
      body: JSON.stringify({
        sessionId: "123",
        organizationId: "org_demo_001",
        eventType: "meeting-ended",
        idempotencyKey: Date.now().toString(),
      }),
    });
  };

  return <button onClick={sendEvent}>Trigger Event</button>;
}
