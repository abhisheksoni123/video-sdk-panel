const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000";

export type SessionRecord = {
  _id: string;
  organizationId: string;
  jobId: string;
  candidateId: string;
  roomId?: string;
  status: string;
};

type EventPayload = {
  sessionId: string;
  organizationId: string;
  eventType: string;
  idempotencyKey: string;
  payload?: Record<string, unknown>;
};

type EventResponse = {
  success: boolean;
  duplicate?: boolean;
  error?: string;
};

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const data = (await response.json()) as T & { error?: string };

  if (!response.ok) {
    throw new Error(data.error ?? "Request failed.");
  }

  return data;
}

export const createSession = async (): Promise<SessionRecord> => {
  const response = await fetch(`${BASE_URL}/api/sessions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      organizationId: "org_demo_001",
      jobId: "job_demo_001",
      candidateId: "can_demo_001",
    }),
  });

  return parseJsonResponse<SessionRecord>(response);
};

export const sendEvent = async (data: EventPayload): Promise<EventResponse> => {
  const response = await fetch(`${BASE_URL}/api/events/ingest`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return parseJsonResponse<EventResponse>(response);
};
