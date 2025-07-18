# 💻 Class 05 – Complete MongoDB Overview & Node.js Integration

---

## 📌 Agenda (Based on Instructor Guide)

* ✅ Introduction to MongoDB and NoSQL
* ✅ SQL vs NoSQL comparison
* ✅ MongoDB structure and terminology
* ✅ Installing MongoDB and Compass on Windows
* ✅ Adding MongoDB to system PATH
* ✅ Connecting MongoDB with Node.js (using Mongoose)
* ✅ CRUD operations: Create, Read, Update, Delete
* ✅ Using MongoDB Compass GUI
* ✅ Project code walkthrough with explanations

---

## 📦 What is MongoDB?

MongoDB is a **NoSQL**, document-based database that stores data in **flexible, JSON-like documents (called BSON)**. It allows dynamic, schema-less data storage — perfect for applications with ever-changing or nested data structures.

---

## 🔄 SQL vs NoSQL Comparison

| Feature        | SQL (Relational DB)   | NoSQL (MongoDB)             |
| -------------- | --------------------- | --------------------------- |
| Structure      | Tables, Rows, Columns | Collections, Documents      |
| Schema         | Fixed schema          | Schema-less, flexible       |
| Joins          | Yes                   | No (use embedded documents) |
| Scalability    | Vertical              | Horizontal                  |
| Storage format | Structured Tables     | BSON (Binary JSON)          |
| Example        | MySQL, PostgreSQL     | MongoDB, CouchDB            |

---

## 🧩 MongoDB Structure & Terminology

| Term           | Description                                   |
| -------------- | --------------------------------------------- |
| **Database**   | Top-level container for collections           |
| **Collection** | Like a SQL table; contains multiple documents |
| **Document**   | A JSON-like object; single record of data     |
| **Field**      | Key-value pair inside a document              |

### 📝 Example MongoDB Document

```json
{
  "name": "Ayesha",
  "age": 22,
  "skills": ["Node.js", "MongoDB"],
  "isStudent": true
}
```

---

## 🖥️ Installation Guide – MongoDB on Windows

### 🔽 Download MongoDB

1. Visit: [https://mongodb.com/try/download/community](https://mongodb.com/try/download/community)
2. Select:

   * Version: Current release
   * Platform: Windows
   * Package: `.msi`

### ⚙️ Installation Steps

* Choose **Complete** setup
* Keep default service settings (Network Service)
* Leave default data path
* Ensure **Compass** checkbox is ticked

### ⚙️ Add MongoDB to System PATH

1. Open *Environment Variables*
2. Edit the `Path` variable
3. Add:

```
C:\Program Files\MongoDB\Server\<version>\bin
```

### ✅ Verify Installation

In **Command Prompt**, run:

```bash
mongod --version
mongosh
```

If both commands work, MongoDB is installed correctly.

---

## 🌐 Using MongoDB Compass (GUI)

1. Open MongoDB Compass
2. Connect using:

```
mongodb://localhost:27017
```

3. You can now:

   * View all databases and collections
   * Browse documents
   * Run visual queries
   * Insert/edit/delete records

---

## 🔗 Connecting MongoDB to Node.js

We use **Mongoose**, an ODM library for MongoDB.

### 🔧 Installation

```bash
npm install mongoose
```

---

## 📂 Project Structure

```
app/
├── db/
│   └── index.js         # MongoDB connection
├── models/
│   └── user.js          # Mongoose schema for User
├── index.js             # Main Express server
├── package.json
```

---

## 🔌 MongoDB Connection Code (`db/index.js`)

```js
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/todo-app';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));
```

> ℹ️ We use `127.0.0.1` instead of `localhost` to avoid IPv6 issues (`::1` errors).

---

## 🧬 Defining a Mongoose Schema (`models/user.js`)

```js
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = model('User', userSchema);
module.exports = User;
```

---

## 🧪 CRUD Operations with Express (`index.js`)

```js
const express = require('express');
require('./db/index'); // Connects to MongoDB
const User = require('./models/user');

const app = express();
app.use(express.json());
```

### ➕ CREATE

```http
POST /users
```

```json
{
  "name": "Ali Raza",
  "email": "ali@example.com"
}
```

### 📥 READ (All)

```http
GET /users
```

### 🔍 READ (By ID)

```http
GET /users/:id
```

### ✏️ UPDATE

```http
PUT /users/:id
```

```json
{
  "name": "Updated Name"
}
```

### ❌ DELETE

```http
DELETE /users/:id
```

---

## 🧠 Mongoose Methods Mapping

| Function                   | Description                 |
| -------------------------- | --------------------------- |
| `User.create()`            | Adds a new document         |
| `User.find()`              | Gets all documents          |
| `User.findById()`          | Fetches a document by `_id` |
| `User.findByIdAndUpdate()` | Edits a document by `_id`   |
| `User.findByIdAndDelete()` | Deletes a document by `_id` |

---

## 🔬 MongoDB Shell Queries (Optional Practice)

### Insert

```js
db.users.insertOne({ name: 'Ali', age: 25 });
db.users.insertMany([{ name: 'Sara' }, { name: 'Omar' }]);
```

### Find

```js
db.users.find();
db.users.findOne({ name: 'Ali' });
```

### Update

```js
db.users.updateOne({ name: 'Ali' }, { $set: { age: 30 } });
db.users.updateMany({}, { $set: { active: true } });
```

### Delete

```js
db.users.deleteOne({ name: 'Ali' });
db.users.deleteMany({ active: false });
```

---

## 🧠 Practice Exercise

Create a `products` collection:

1. Insert multiple products with:

   ```json
   {
     "name": "Laptop",
     "price": 45000,
     "category": "Electronics"
   }
   ```
2. Query products by price
3. Update category
4. Delete discontinued products

---

## 💡 Pro Tips

* MongoDB stores documents as **BSON (Binary JSON)**
* Compass is great for visual database interaction
* Use `mongosh` for command-line queries
* Collections don’t need predefined structure
* Use indexes for large-scale query optimization

---

## ✅ Final Checklist

| Task                                          | Done? |
| --------------------------------------------- | ----- |
| MongoDB installed and verified via `mongod`   | ✅     |
| Connected MongoDB with Node.js using Mongoose | ✅     |
| Implemented CRUD operations                   | ✅     |
| Tested API with Thunder Client or Postman     | ✅     |
| Viewed database via MongoDB Compass           | ✅     |

---
## 📚 Additional Resources
* [MongoDB Official Documentation](https://docs.mongodb.com/)
* [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
* [MongoDB Compass User Guide](https://docs.mongodb.com/compass/current/)
* [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Thunder Client Documentation](https://www.thunderclient.com/docs)

