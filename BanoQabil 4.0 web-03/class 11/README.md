# Class 11 — Careem Analytics & Full‑Stack Quiz App

> Aggregation pipelines (MongoDB) + Class project plan — clean, practical, and ready for implementation.

**Author:** Okasha Nadeem
**Date:** August 2025

---

## Contents

1. [Overview](#overview)
2. [Why this project](#why-this-project)
3. [Key concepts (short)](#key-concepts-short)
4. [Project features (roles)](#project-features-roles)
5. [Tech stack & architecture](#tech-stack--architecture)
6. [Repo layout (suggested)](#repo-layout-suggested)
7. [Prerequisites](#prerequisites)
8. [Quick start (local)](#quick-start-local)
9. [CSV import example](#csv-import-example)
10. [Core aggregation snippets](#core-aggregation-snippets)
11. [Indexing: examples & tips](#indexing-examples--tips)
12. [API endpoints (summary)](#api-endpoints-summary)
13. [Frontend: pages & UX notes](#frontend-pages--ux-notes)
14. [Testing & verification](#testing--verification)
15. [Contributing & workflow](#contributing--workflow)
16. [License & credits](#license--credits)

---

## Overview

This repository documents two connected deliverables:

* **Careem Analytics**: concise MongoDB aggregation examples used in class for analytics and reporting.
* **Class Full‑Stack Quiz App**: a team-built product (Teacher / Student / Admin) with CSV import, quiz generation, instant scoring, and admin controls.

The README is intentionally concise and action-oriented — copy the examples, run the quick-start, and adapt the schema to your implementation.

---

## Why this project

* Teach server-side data processing with MongoDB aggregation pipelines.
* Practice full-stack teamwork: API design, RBAC, frontend UX, CSV ingestion and data modeling.
* Deliver a small production-like app suitable for demos and portfolio work.

**Primary use-cases**

* Instructor dashboard: participation, submissions, top scorers.
* Student dashboard: available quizzes, progress, instant feedback.
* Admin: manage users, assign courses, audit data.

---

## Key concepts (short)

### Aggregation pipeline

A sequence of stages that transform documents. Each stage accepts input documents and outputs transformed documents for the next stage. Use for filtering, grouping, joining and computing statistics.

When to use: dashboards, reports, ad-hoc analytics, joins (`$lookup`).

### Indexing

Indexes speed up read queries and sorts. Trade-off: more storage and slower writes. Always validate index choice with `explain()`.

Common index types: single-field, compound, unique, text, TTL.

---

## Project features (roles)

### Teacher

* Login, dashboard (analytics & quick stats)
* View enrolled students per course
* Course management (CRUD)
* Create quiz: manual or CSV upload (title, description, duration, type)
* View submissions per quiz
* Profile, logout

### Student

* Login, dashboard (enrolled courses & progress)
* View quizzes available in enrolled courses
* Attempt quiz (timer, autosave), submit, instant MCQ scoring
* Profile, logout

### Admin

* Login, global dashboard
* Course management: assign/activate/deactivate
* User management: view, edit, delete
* Profile, logout

---

## Tech stack & architecture

**Backend**

* Node.js + Express (or Nest.js)
* MongoDB (Atlas or local)
* Mongoose or native MongoDB driver
* Auth: JWT + Refresh tokens (or session)

**Frontend**

* Next.js (React) + Tailwind CSS
* Role-based routes & layouts

**Dev tools**

* Postman / Thunder Client, GitHub, MongoDB Compass

---

## Prerequisites

* Node.js v18+
* MongoDB (local or Atlas)
* npm or yarn

---

## Quick start (local)

> Example repositories used in class:

* Backend: `https://github.com/MuhammadShan-Log/BQ-Quiz-Backend`
* Frontend: `https://github.com/MuhammadShan-Log/BQ-Quiz-Frontend`

**Backend**

```bash
git clone <backend-repo>
cd backend
npm install
cp .env.example .env   # create .env from example
# set MONGO_URI (e.g. mongodb://127.0.0.1:27017/bq-quiz-app)
npm run dev
```

**Frontend**

```bash
cd ../frontend
npm install
npm run dev
# open http://localhost:3000
```

**Minimal .env**

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bq-quiz-app
JWT_SECRET=change_this_to_a_strong_secret
```

---

## CSV import example

Recommended CSV format for MCQs:

```
question,optionA,optionB,optionC,optionD,correct,marks,type
What is 2+2?,1,2,3,4,D,1,mcq
```

Server-side handling:

* Accept file upload with `multer`.
* Parse CSV with `csv-parse` or `papaparse`.
* Validate rows and insert with `insertMany()`.

Quick offline import (for seeds):

```bash
mongoimport --uri "mongodb://localhost:27017/quizapp" \
  --collection questions --type csv --headerline --file sample_questions.csv
```

---

## Core aggregation snippets

Replace collection/field names to match your schema.

### \$match — filter documents

```js
db.rides.aggregate([
  { $match: { city: "Karachi" } }
])
```

### \$project — select / compute fields

```js
db.rides.aggregate([
  { $project: { _id: 0, riderId: 1, fare: 1, city: 1 } }
])
```

### \$group — aggregate by key

```js
db.rides.aggregate([
  { $group: {
      _id: "$captainId",
      totalEarnings: { $sum: "$fare" },
      averageRating: { $avg: "$rating" },
      rides: { $sum: 1 }
  }}
])
```

### \$sort — order results

```js
{ $sort: { totalEarnings: -1 } }
```

### \$skip & \$limit — pagination

```js
{ $skip: 0 },
{ $limit: 10 }
```

### Combined: top captains by earnings

```js
db.rides.aggregate([
  { $match: { city: "Karachi", status: "completed" } },
  { $group: {
      _id: "$captainId",
      totalEarnings: { $sum: "$fare" },
      ridesCompleted: { $sum: 1 }
  }},
  { $sort: { totalEarnings: -1 } },
  { $limit: 10 }
])
```

**Tip:** Run the pipeline in Compass or `mongo` shell and call `.explain()` if performance is unexpected.

---

## Indexing: examples & tips

```js
// single-field
db.rides.createIndex({ captainId: 1 })

// compound (filter + sort)
db.rides.createIndex({ city: 1, fare: -1 })

// unique
db.users.createIndex({ email: 1 }, { unique: true })

// TTL (expire after 30 days)
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 2592000 })
```

**Best practices**

* Index fields used in `$match`, `$sort`, and frequent lookups.
* Prefer compound indexes when queries filter+sort on fields in the same order.
* Avoid indexing very low-cardinality fields unless necessary.
* Use `explain()` to confirm index usage and measure costs.

---

## API endpoints (summary)

**Auth**

* `POST /api/auth/login` → `{ accessToken, refreshToken, role }`
* `POST /api/auth/refresh`

**Teacher**

* `GET /api/teacher/dashboard`
* `POST /api/teacher/courses`
* `GET /api/teacher/courses/:id/students`
* `POST /api/teacher/quizzes` (JSON or CSV)
* `GET /api/teacher/quizzes/:id/submissions`

**Student**

* `GET /api/student/dashboard`
* `GET /api/student/courses`
* `GET /api/student/courses/:id/quizzes`
* `POST /api/student/quizzes/:id/attempt`

**Admin**

* `GET /api/admin/dashboard`
* `POST /api/admin/courses/:id/assign`
* `GET /api/admin/users`
* `PUT /api/admin/users/:id`
* `DELETE /api/admin/users/:id`

**Sample: create quiz (curl)**

```bash
curl -X POST http://localhost:5000/api/teacher/quizzes \
  -H "Authorization: Bearer <accessToken>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Midterm - JS Fundamentals",
    "description": "MCQs on basic JS",
    "duration": 30,
    "type": "mcq",
    "questions": [ { "question": "...", "options": ["a","b","c","d"], "correct": 2 } ]
  }'
```

---

## Frontend: pages & UX notes

Key pages:

* `/` (landing)
* `/auth/login` (role selection)
* `/teacher/*`, `/student/*`, `/admin/*` dashboards
* `/teacher/quizzes/new` (CSV upload)
* `/student/courses/[id]/quizzes/[quizId]/attempt`
* `/profile`

UX notes:

* Autosave answers locally (localStorage) and sync periodically.
* Show clear timers for duration-based quizzes and confirm before submit.
* Protect routes with auth guards and role checks.

---

## Testing & verification

* Use Postman / Thunder Client for endpoint testing.
* Create a seed script to insert sample users, courses and quizzes.
* In MongoDB Compass, test aggregation pipelines and run `explain()` to ensure index usage.

---

## Contributing & workflow

1. Fork the repo
2. Create branch `feature/<name>`
3. Push and open PR with description + test steps
4. Add seed data and screenshots where applicable

---

## License & credits

Created by Class 11 (Backend) — educational use. Adapt freely for learning and demos.

