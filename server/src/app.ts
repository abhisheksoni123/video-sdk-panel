import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

import eventRoutes from "./routes/event.routes";
import sessionRoutes from "./routes/session.routes";

dotenv.config();
void connectDB();

const app = express();
const port = Number(process.env.PORT ?? 5000);

app.use(
  cors({
    origin: process.env.WEB_ORIGIN ?? "http://localhost:3000",
  }),
);
app.use(express.json());

// routes
app.use("/api/events", eventRoutes);
app.use("/api/sessions", sessionRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
