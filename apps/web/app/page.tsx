"use client";

export default function Home() {
  const createSession = async () => {
    const res = await fetch("http://localhost:5000/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        organizationId: "org_demo_001",
        jobId: "job_demo_001",
        candidateId: "can_demo_001",
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Exterview Demo</h1>
      <button onClick={createSession}>Create Session</button>
    </div>
  );
}
