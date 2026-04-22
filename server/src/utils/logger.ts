export const log = (data: {
  sessionId: string;
  fromStatus?: string;
  toStatus?: string;
  triggeredBy?: string;
}) => {
  console.log(
    JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
    }),
  );
};
