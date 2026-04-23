"use client";

import { useParams } from "next/navigation";
import VideoRoom from "@/components/VideoRoom";

export default function SessionPage() {
  const params = useParams();
  const sessionId = params.id as string;

  return (
    <div>
      <h2>Session: {sessionId}</h2>
      <VideoRoom sessionId={sessionId} />
    </div>
  );
}
