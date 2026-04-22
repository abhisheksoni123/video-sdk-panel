export const generateMockTranscript = (sessionId: string) => {
  return {
    sessionId,
    status: "completed",
    segments: [
      {
        speaker: "candidate",
        text: "I have worked on scalable systems.",
      },
    ],
  };
};
