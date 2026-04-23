import type { Request, Response } from "express";
import Session from "../models/session.model";

type CreateSessionBody = {
  organizationId: string;
  jobId: string;
  candidateId: string;
  roomId?: string;
};

export const createSession = async (
  req: Request<{}, {}, CreateSessionBody>,
  res: Response,
) => {
  const session = await Session.create(req.body);
  res.json(session);
};
