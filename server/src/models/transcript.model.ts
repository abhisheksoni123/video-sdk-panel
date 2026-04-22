import mongoose from "mongoose";

const transcriptSchema = new mongoose.Schema(
  {
    sessionId: String,
    organizationId: String,
    status: String,
    segments: Array,
  },
  { timestamps: true },
);

export default mongoose.model("Transcript", transcriptSchema);
