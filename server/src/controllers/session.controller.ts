import Session from "../models/session.model";

export const createSession = async (req, res) => {
  const session = await Session.create(req.body);
  res.json(session);
};
