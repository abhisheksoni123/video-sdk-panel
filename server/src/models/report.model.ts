import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    sessionId: String,
    organizationId: String,
    overallScore: Number,
    summary: String,
  },
  { timestamps: true },
);

export default mongoose.model("Report", reportSchema);
