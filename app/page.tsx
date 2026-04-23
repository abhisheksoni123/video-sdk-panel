"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createSession } from "@/lib/api";

export default function Home() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState(
    "Create a demo session to verify the pipeline is wired up.",
  );

  const handleCreateSession = async () => {
    setStatus("Creating session...");

    try {
      const session = await createSession();
      setStatus(`Session created: ${session._id}`);

      startTransition(() => {
        router.push(`/session/${session._id}`);
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to create session.";
      setStatus(message);
    }
  };

  return (
    <main className="shell">
      <section className="panel">
        <span className="eyebrow">Video SDK Panel</span>
        <h1 className="title">Interview sessions, event ingestion, and AI flow.</h1>
        <p className="copy">
          This demo starts a session in the Express API, then moves into a
          session screen where you can simulate a meeting-ended event.
        </p>

        <div className="stack">
          <button
            className="button"
            disabled={pending}
            onClick={handleCreateSession}
            type="button"
          >
            {pending ? "Creating session..." : "Create Session"}
          </button>

          <div className="statusCard">
            <p className="statusLabel">Session status</p>
            <p className="statusText">{status}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
