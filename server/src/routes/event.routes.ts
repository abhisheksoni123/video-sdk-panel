import express from "express";
import { ingestEvent } from "../controllers/event.controller";

const router = express.Router();

router.post("/ingest", ingestEvent);

export default router;
