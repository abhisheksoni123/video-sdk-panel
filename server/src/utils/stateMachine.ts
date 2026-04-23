export type Status =
  | "CREATED"
  | "LIVE"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED"
  | "EXPIRED";

const transitions: Record<Status, Status[]> = {
  CREATED: ["LIVE", "CANCELLED", "EXPIRED"],
  LIVE: ["PROCESSING", "CANCELLED"],
  PROCESSING: ["COMPLETED", "FAILED"],
  FAILED: ["PROCESSING"],
  COMPLETED: [],
  CANCELLED: [],
  EXPIRED: [],
};

export const canTransition = (from: Status, to: Status) => {
  return transitions[from]?.includes(to);
};
