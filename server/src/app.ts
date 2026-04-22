import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

import eventRoutes from "./routes/event.routes";
import sessionRoutes from "./routes/session.routes";

import "./workers/event.worker";
import "./workers/transcription.worker";
import "./workers/ai.worker";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// routes
app.use("/api/events", eventRoutes);
app.use("/api/sessions", sessionRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
