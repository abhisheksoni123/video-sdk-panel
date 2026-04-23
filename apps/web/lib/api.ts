const BASE_URL = "http://localhost:5000";

export const createSession = async () => {
  const res = await fetch(`${BASE_URL}/api/sessions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      organizationId: "org_demo_001",
      jobId: "job_demo_001",
      candidateId: "can_demo_001",
    }),
  });

  return res.json();
};

export const sendEvent = async (data: any) => {
  const res = await fetch(`${BASE_URL}/api/events/ingest`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};
