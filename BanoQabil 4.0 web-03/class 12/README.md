# Class 12 — MongoDB Aggregation Pipeline

> Clean, practical reference for aggregation stages, examples, tips, and in-class exercises — tuned for the Careem Analytics + Quiz App project.

**Author:** Okasha Nadeem
**Date:** August 2025

---

## Contents

* [Overview](#overview)
* [Pipeline syntax](#pipeline-syntax)
* [Common stages (quick reference)](#common-stages-quick-reference)
* [Stage explanations & examples](#stage-explanations--examples)
* [Real examples (class)](#real-examples-class)
* [Advanced aggregation highlights](#advanced-aggregation-highlights)
* [Side topics (brief)](#side-topics-brief)
* [Best practices & tips](#best-practices--tips)
* [Common pitfalls](#common-pitfalls)
* [Small exercises (practice)](#small-exercises-practice)
* [Next steps (recommended)](#next-steps-recommended)

---

## Overview

Aggregation in MongoDB is a server-side way to process and transform documents using a series of stages — an *aggregation pipeline*. Each stage takes the documents from the previous stage, transforms them, and passes them on. Aggregation is ideal for analytics dashboards, reporting, summarization, and joining related collections.

Use this sheet as the class reference: copy the examples, adapt field names to your schema, and run them in Compass or the mongo shell.

---

## Pipeline syntax

```js
db.collection.aggregate([
  { /* stage 1 */ },
  { /* stage 2 */ },
  // ...
])
```

Each stage is an object whose key is a pipeline operator such as `$match`, `$group`, `$project`, `$sort`, `$lookup`, etc.

---

## Common stages (quick reference)

* **\$match** — filter documents (like `find`).
* **\$project** — include/exclude fields; compute new fields.
* **\$group** — group documents and compute aggregates (`$sum`, `$avg`, `$min`, `$max`, `$push`).
* **\$sort** — sort results (1 = asc, -1 = desc).
* **\$limit / \$skip** — limit output size and paginate.
* **\$lookup** — left-outer join with another collection.
* **\$unwind** — flatten an array field into multiple documents.
* **\$addFields / \$set** — compute or add fields to documents.
* **\$facet** — run multiple sub-pipelines in parallel and return grouped results (ideal for dashboards).
* **\$merge / \$out** — store aggregation results into a collection.

---

## Stage explanations & examples

### `$match`

Filters documents and passes only matching documents downstream.

```js
{ $match: { city: "Karachi" } }
```

**Use-case:** restrict pipeline to rides in Karachi before heavy ops.

---

### `$project`

Selects fields or computes new ones. Use `1` to include, `0` to exclude.

```js
{ $project: { _id: 0, riderId: 1, fare: 1, city: 1 } }
```

**Tip:** project early to reduce document size.

---

### `$group`

Groups documents by a key and computes aggregates.

```js
{ $group: {
  _id: "$captainID",
  totalEarnings: { $sum: "$fare" },
  averageRating: { $avg: "$rating" }
} }
```

**Use-case:** earnings or rating summaries per captain.

---

### `$sort`

Orders documents.

```js
{ $sort: { totalEarnings: -1 } }
```

Always sort after grouping or projecting the field you want to order by.

---

### `$limit` & `$skip`

Used for pagination.

```js
{ $skip: 20 },
{ $limit: 10 }
```

Combine with `$sort` for deterministic paging.

---

### `$lookup`

Performs a left outer join. Example: attach `captains` data to `rides`.

```js
{ $lookup: {
  from: "captains",
  localField: "captainID",
  foreignField: "captainID",
  as: "captainInfo"
} }
```

Result: each ride gets `captainInfo` as an array of matched docs.

---

### `$unwind`

Turns array elements into separate documents.

```js
{ $unwind: "$captainInfo" }
```

Use `preserveNullAndEmptyArrays: true` when some docs may have no matches.

---

## Real examples (class)

### Top captains by total fare (completed rides)

```js
db.rides.aggregate([
  { $match: { status: "completed" } },
  { $group: {
      _id: "$captainID",
      totalFare: { $sum: "$fare" },
      averageRating: { $avg: "$rating" }
  } },
  { $sort: { totalFare: -1 } },
  { $limit: 10 }
])
```

**Explainer:** filter -> group by captain -> sum fares -> sort -> top 10.

---

### Average delivery time (minutes)

```js
db.rides.aggregate([
  { $match: { type: "delivery" } },
  { $group: {
      _id: "$deliveryID",
      avgTimeMins: { $avg: { $divide: ["$deliveryTime", 60] } }
  } },
  { $sort: { avgTimeMins: 1 } },
  { $limit: 10 }
])
```

**Explainer:** convert seconds to minutes using `$divide`, compute average, then find fastest deliveries.

---

## Advanced aggregation highlights

### `$addFields` / `$set`

Add or overwrite fields for later stages.

```js
{ $addFields: { fareWithTax: { $multiply: ["$fare", 1.15] } } }
```

### `$facet` — build dashboard cards in one request

Run multiple independent sub-pipelines on the same input and return them together.

```js
db.courses.aggregate([
  { $match: { teacherId: ObjectId("TEACHER_ID") } },
  { $facet: {
      totalQuizzes: [
        { $lookup: { from: "quizzes", localField: "_id", foreignField: "courseId", as: "q" } },
        { $project: { count: { $size: "$q" } } },
        { $group: { _id: null, total: { $sum: "$count" } } }
      ],
      recentSubmissions: [ /* pipeline to count last 7 days submissions */ ],
      topStudents: [ /* pipeline to compute top 5 students */ ]
  } }
])
```

**Note:** `$facet` is powerful but can be memory-heavy; for massive datasets consider pre-aggregation or batched reports.

---

## Side topics (brief)

### What is an ORM / ODM?

* **ORM**: Object-Relational Mapping (for SQL DBs).
* **ODM**: Object-Document Mapping (for MongoDB; e.g., Mongoose).
  They help map application objects to database rows/documents.

### What is `seed.js` ?

A script that populates the database with sample/test data so developers can work with predictable datasets.

---

## Best practices & tips

* **Filter early:** place `$match` as early as possible.
* **Project early:** remove unused fields with `$project` to reduce memory.
* **Index for lookups & matches:** create indexes on fields used in `$match`, `$lookup` (`localField` / `foreignField`) and `$sort`.
* **Prefer compound indexes** when queries filter and sort on multiple fields.
* **Avoid huge in-memory `$group`:** if groups are extremely large, consider bucketing or incremental aggregation.
* **Use `$merge` / `$out`** to persist heavy aggregates and avoid recomputing on every request.
* **Test with `.explain("executionStats")`:** iterate—add indexes and re-run explain to measure gains.

---

## Common pitfalls

* Expecting `$project` to order documents — projection doesn't sort; use `$sort`.
* Forgetting `_id` is included by default when projecting.
* Performing expensive operations before filtering (e.g., `$lookup` or `$group` before `$match`).
* Not handling empty arrays or missing fields (`$avg` on empty arrays returns `null`). Use `$ifNull` to fallback.

---

## Small exercises (practice)

1. **Top 5 cities by ride count** — write a pipeline using `$group` and `$sort`.
2. **Monthly revenue (last 6 months)** — group by year/month (use `$dateToString` or `$month` + `$year`).
3. **Join rides with captains** — use `$lookup` then `$unwind` to add captain `name` to each ride.
4. **Average fare per stop** — `$unwind` `deliveryStops`, then group by `deliveryID`.

