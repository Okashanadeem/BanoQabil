# 📚 Class 1 - Web Development (Backend Introduction)

## ✅ Topics Covered

### 🔸 What is LeetCode?

LeetCode is a platform to practice **coding problems** and improve your **problem-solving skills**. It’s widely used by developers to prepare for **interviews**.

---

### 🔸 Backend vs Server vs Database

| Term         | Meaning                                                                          |
| ------------ | -------------------------------------------------------------------------------- |
| **Backend**  | The logic that runs on the server — it handles data, authentication, etc.        |
| **Server**   | The system (usually a machine or cloud service) where the backend code runs.     |
| **Database** | Stores the actual data (like user info, messages, etc.) that backend can access. |

> 📌 The **backend** runs on the **server**, and the **server is connected to the database**.

---

### 🔸 What is an API?

**API (Application Programming Interface)** is a **link between the frontend and backend**.

* Frontend: Sends requests to the API (like "get user info")
* Backend: Processes the request and responds with data
* API: Acts as the bridge for communication

---

### 🔸 Tools Installed

* ✅ [Node.js](https://nodejs.org) – Runtime to run JavaScript code on the server
* ✅ [Postman](https://www.postman.com/) – Tool to test APIs
* ✅ [JSONPlaceholder](https://jsonplaceholder.typicode.com) – Free fake REST API for practice

---

### 🔸 How an Operation is Performed (User Requests Data)

1. The **user** sends a request from the **frontend** (e.g., clicks a button).
2. The **frontend** sends the request to the **API**.
3. The **API** routes the request to the **backend** server.
4. The **backend** interacts with the **database** to get the data.
5. The **response** is sent back to the frontend through the **API**.
6. The **user** sees the result on the screen.

---

### 🔸 Common HTTP Response Status Codes

| Code | Meaning                                            |
| ---- | -------------------------------------------------- |
| 200  | OK – Request succeeded                             |
| 201  | Created – New resource created successfully        |
| 400  | Bad Request – Invalid input                        |
| 401  | Unauthorized – Not logged in or access denied      |
| 404  | Not Found – Resource not found                     |
| 500  | Server Error – Something went wrong on the backend |

---

## 📘 Next Class Preparation

### 🔹 ES6 (Modern JavaScript) Features

* `let`, `const`
* Template literals
* Destructuring
* Spread/rest operators
* Default parameters

### 🔹 Functions

* Normal functions
* Arrow functions

### 🔹 Array Methods

* `map()`
* `filter()`
* `reduce()`

### 🔹 Async Concepts

* Callbacks
* Promises

