import VideoRoom from "@/components/VideoRoom";

type SessionPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SessionPage({ params }: SessionPageProps) {
  const { id } = await params;

  return (
    <main className="shell">
      <section className="panel">
        <span className="eyebrow">Session</span>
        <h1 className="title">Pipeline trigger console.</h1>
        <p className="copy">
          Use this session to simulate a VideoSDK event and verify the ingestion
          path into the API.
        </p>

        <div className="stack">
          <div className="statusCard">
            <p className="statusLabel">Current session ID</p>
            <p className="statusText sessionId">{id}</p>
          </div>

          <VideoRoom sessionId={id} />
        </div>
      </section>
    </main>
  );
}
