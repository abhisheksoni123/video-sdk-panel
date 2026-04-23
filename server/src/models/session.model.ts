import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    organizationId: String,
    jobId: String,
    candidateId: String,
    roomId: String,
    status: {
      type: String,
      enum: [
        "CREATED",
        "LIVE",
        "PROCESSING",
        "COMPLETED",
        "FAILED",
        "CANCELLED",
        "EXPIRED",
      ],
      default: "CREATED",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Session", sessionSchema);
