import Session from "../models/session.model";
import { canTransition } from "../utils/stateMachine";
import { log } from "../utils/logger";

export const updateSessionStatus = async (
  sessionId: string,
  nextStatus: string,
  triggeredBy: string,
) => {
  const session = await Session.findById(sessionId);
  if (!session) throw new Error("Session not found");

  if (!canTransition(session.status, nextStatus)) {
    throw new Error(`Invalid transition ${session.status} → ${nextStatus}`);
  }

  const prev = session.status;
  session.status = nextStatus;
  await session.save();

  log({
    sessionId,
    fromStatus: prev,
    toStatus: nextStatus,
    triggeredBy,
  });

  return session;
};
