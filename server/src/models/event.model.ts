import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    sessionId: String,
    organizationId: String,
    eventType: String,
    payload: Object,
    idempotencyKey: { type: String, unique: true },
    processedAt: Date,
  },
  { timestamps: true },
);

export default mongoose.model("Event", eventSchema);
