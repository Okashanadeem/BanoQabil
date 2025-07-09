Here is your updated `README.md` with the **JavaScript + LeetCode Practice Section** added **perfectly and professionally** under the preparation section:

---

````markdown
# 📚 Class 3: Node.js + Express.js Overview

## 🔷 What is Node.js?
Node.js is a **JavaScript runtime environment** that allows you to run JavaScript code **outside the browser**. It's powered by Chrome's **V8 engine** and is designed to build **scalable**, **fast** applications like servers, APIs, tools, etc.

### ⚙️ Key Features:
- Built on **V8 engine** (same as Chrome)  
- Created by **Ryan Dahl**  
- Can perform **multiple actions simultaneously**  
- Supports **non-blocking I/O** via **event-driven architecture**  
- Uses **libuv** library to handle I/O efficiently  

---

## 🔁 What is the Event Loop?
The **event loop** continuously checks a queue of tasks and executes callbacks one at a time without blocking. This makes Node.js great for handling many concurrent operations.

---

## 🚀 What is Nodemon?
`nodemon` automatically **restarts your server** when files change, speeding up development.

### 📦 Installation:
```bash
npm install --save-dev nodemon
````

Run with:

```bash
npx nodemon app.js
```

---

## 🛡️ What is Middleware?

A **middleware** function runs **before** your route handler. Common uses:

* **Authentication** (return 403 if not allowed)
* **Logging**, **validation**, **body parsing**, etc.

---

## 🧪 Quiz/Exam Info (10-july-2025)

Expect:

* **2–3 Coding Questions**
* **MCQs**
* Tasks like **identifying bugs**, **predicting outputs**, **pseudo‑code**

### 📎 Reference Link:

* [Class 2 Quiz Details](https://github.com/Okashanadeem/BanoQabil/tree/main/BanoQabil%204.0%20web-03/class%2002#-quiz-topics-for-class-4)

---

## 🧠 JavaScript Logic & LeetCode Practice Guide

These beginner-friendly problems will help you build strong fundamentals in JavaScript — especially with **loops, arrays, strings, conditionals, objects**, and **core logic**.

### 🔹 Logic & JavaScript Essentials

| Problem                                                                         | Key Concepts                           |
| ------------------------------------------------------------------------------- | -------------------------------------- |
| [Two Sum](https://leetcode.com/problems/two-sum/)                               | Hashmaps, basic iteration              |
| [Valid Anagram](https://leetcode.com/problems/valid-anagram/)                   | Character counts, sorting              |
| [Reverse String](https://leetcode.com/problems/reverse-string/)                 | String/array manipulation              |
| [Palindrome Number](https://leetcode.com/problems/palindrome-number/)           | Number/string conversion, conditionals |
| [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Iteration & basic recursion logic      |

### 🔹 Arrays & Strings – Core DSA for Frontend Devs

| Problem                                                                                                   | Technique                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Two-pointer technique       |
| [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)                                       | Kadane’s Algorithm          |
| [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)         | Sliding window              |
| [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)                                   | Sets and lookup             |
| [Move Zeroes](https://leetcode.com/problems/move-zeroes/)                                                 | In-place array manipulation |

### 🔹 Frontend-Oriented JavaScript Practice

| Problem                                                                                                 | Why It Matters                                    |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)                                   | Stack-based logic (like validating JSX structure) |
| [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)                 | Set, map, and filter usage                        |
| [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) | Frequency maps                                    |
| [Majority Element](https://leetcode.com/problems/majority-element/)                                     | Finding most frequent value                       |
| [FizzBuzz](https://leetcode.com/problems/fizz-buzz/)                                                    | Loop logic and conditional branching              |

### 🧪 Platforms to Practice:

* [LeetCode](https://leetcode.com/)
* [HackerRank – 10 Days of JavaScript](https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)
* [Codewars – JavaScript Kata](https://www.codewars.com/kata/search/javascript?q=&order_by=total_completed%20desc)

---

## 📦 How to Initialize Project & Install Express

### 1️⃣ Initialize with npm

```bash
npm init -y
```

### 2️⃣ Install Express.js

```bash
npm install express
```

### 3️⃣ Add Dev Script for Nodemon

In `package.json`:

```json
"scripts": {
  "dev": "nodemon express.js"
}
```

Run:

```bash
npm run dev
```

---

## 🧶 Optional: Yarn Setup

If you prefer Yarn:

```bash
yarn init -y
yarn add express
yarn add --dev nodemon
```

Add to `package.json`:

```json
"scripts": {
  "start": "node express.js",
  "dev": "nodemon express.js"
}
```

---

## 📂 File Structure

```
/class-3-node-express/
│
├── README.md
├── package.json
├── app.js          # Pure Node.js server
└── express.js      # Express.js server
```

---

## 📌 How to Run

### Run `app.js` (Node.js only)

```bash
node app.js
```

### Run `express.js` (Express)

```bash
node express.js
# or with nodemon:
npm run dev
```

Visit: `http://localhost:3000`

---

## 🆚 Node.js vs Express.js

| Feature         | Node.js (`http` module)     | Express.js (Framework)          |
| --------------- | --------------------------- | ------------------------------- |
| **Routing**     | Manual `if/else`            | `app.get()`, `app.post()`, etc. |
| **Readability** | Can get messy               | Clean, declarative              |
| **Middleware**  | DIY                         | Built-in and extensible         |
| **JSON**        | `JSON.stringify()` manually | `res.json()`                    |
| **404**         | Custom logic                | `app.use()` catch-all           |
| **Scaling**     | More boilerplate            | Modular, suited for large apps  |

---

## 📚 Extras for Self‑Study

*(Not covered in class slides—explore these on your own!)*

### 1. Serving JSON in Node.js

```js
if (req.url === '/api') {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ name: 'Ali', age: 25 }));
}
```

### 2. Query Params in Node.js

```js
const url = require('url');
const { query } = url.parse(req.url, true);
console.log(query);
```

### 3. Asynchronous File Read

```js
const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 4. Express Query & Body Parsing

```js
app.use(express.json());        // parse JSON bodies

app.get('/greet', (req, res) => {
  res.send(`Hello, ${req.query.name || 'Guest'}`);
});
```

---

