# 🚀 Exterview – AI Interview Intelligence Pipeline

> Event-driven, scalable system to process interview data and generate AI-powered insights.

---

## 🧠 Overview

Exterview is a real-time interview processing system that transforms interview signals into structured reports.

### 🔄 Pipeline

AI Job Context → Video Interview → Event Capture → Queue → Workers → Transcript → AI Scoring → Report

---

## 🏗️ Architecture

Frontend (Next.js)
↓
Event API (Express)
↓
Queue (BullMQ + Redis)
↓
Workers
├── Event Worker
├── Transcription Worker
└── AI Worker
↓
MongoDB

### 🔑 Key Principle

> No heavy processing happens inside API requests — everything is async via queues.

---

## 📁 Folder Structure

apps/web
└── app/
├── page.tsx
└── session/[id]/page.tsx

server/src
├── routes
├── controllers
├── services
├── queues
├── workers
├── models
└── utils

---

## 🚀 Future Improvements (Production-Grade Enhancements)

This project is intentionally scoped for demonstration. Below are key improvements to make it production-ready.

---

### 🎥 1. Real VideoSDK Integration

- Replace mock event triggers with actual VideoSDK events
- Capture real-time:
  - participant-joined / left
  - speaker-changed
  - meeting-started / ended
- Stream events directly to ingestion API

---

### 🎙️ 2. Real Transcription Pipeline

- Integrate VideoSDK recording API
- Use OpenAI Whisper or similar service for transcription
- Handle:
  - partial transcripts
  - speaker diarization (who spoke when)
  - timestamp alignment

---

### 🧠 3. AI Scoring Improvements

- Add **Zod schema validation** for LLM output
- Implement **retry on invalid responses**
- Reduce hallucination:
  - Validate quotes exist in transcript
- Improve prompt engineering for consistent scoring

---

### 🔁 4. Robust Queue & Retry System

- Add exponential backoff retries (1s, 4s, 16s)
- Implement **dead-letter queue**
- Track job status in `pipeline_jobs` collection
- Add job-level observability

---

### 🧩 5. Stronger Session State Machine

- Enforce strict state transitions:
  - CREATED → LIVE → PROCESSING → COMPLETED
- Prevent invalid transitions
- Add concurrency guard:
  - candidate cannot have multiple LIVE sessions

---

### 📊 6. Observability & Monitoring

- Add `/api/pipeline/health` endpoint:
  - queue depth
  - active jobs
  - failure rates
- Integrate logging tools:
  - Datadog / ELK / CloudWatch
- Add structured logs for all state transitions

---

### 🔐 7. Authentication & Authorization

- Implement JWT-based authentication
- Role-based access:
  - interviewer
  - candidate
  - observer
- Secure all API endpoints

---

### 🏢 8. Multi-Tenant Isolation (Hardening)

- Enforce `organizationId` in all queries
- Add middleware for tenant validation
- Prevent cross-tenant data leakage

---

### ⚡ 9. Scalability Improvements

- Separate services:
  - API service
  - Worker service
- Horizontal scaling of workers
- Use managed services:
  - Redis (Elasticache)
  - MongoDB Atlas

---

### 📦 10. API & System Hardening

- Add request validation (Zod)
- Rate limiting on APIs
- Idempotency enforcement across all endpoints
- Input sanitization

---

### 🎨 11. Frontend Enhancements

- Real-time participant UI using VideoSDK
- Active speaker highlighting
- Interview progress indicators
- Recording playback UI

---

### 🧪 12. Testing Strategy

- Unit tests for services
- Integration tests for pipeline
- Load testing for queue system
- Failure simulation (kill worker, retry validation)

---

### 📈 13. Performance Optimization

- Index MongoDB collections properly
- Optimize large transcript processing
- Batch processing for AI jobs if needed

---

### 🔗 14. Recording Storage & Playback

- Store recordings in cloud (S3 / GCS)
- Link recording timestamps to transcript segments
- Enable playback with transcript sync

---

## 🎯 Summary

These improvements focus on:

- Reliability (retry, failure handling)
- Scalability (queues, workers, horizontal scaling)
- Accuracy (AI validation, transcription quality)
- Security (auth, tenant isolation)
- Observability (logs, metrics)

This design ensures the system can handle real-world production workloads.

### 1️⃣ Install dependencies

```bash
npm install

MONGODB_URI=your_mongodb_uri
REDIS_URL=redis://127.0.0.1:6379
OPENAI_API_KEY=your_openai_key

##Run the project
npm run dev
```
