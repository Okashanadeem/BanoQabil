# 📝 Full-Stack CRUD App Assignment

A beginner-friendly **CRUD** (Create, Read, Update, Delete) application built with:

- 🖥️ **Backend**: Node.js · Express · MongoDB · Mongoose  
- 📦 **Frontend**: Next.js · React · Tailwind CSS  
- 🛠️ ** testing**: Thunder Client · MongoDB Compass  

---

## 📑 Table of Contents

1. [Features](#-features)  
2. [Tech Stack](#-tech-stack)  
3. [Folder Structure](#-folder-structure)  
4. [Setup & Run](#-setup--run)  
   - [Prerequisites](#prerequisites)  
   - [Backend](#backend)  
   - [Frontend](#frontend)  
5. [API Reference](#-api-reference)  
6. [Tips & Next Steps](#-tips--next-steps)  
7. [Credits](#-credits)  

---

## 🚀 Features

- **Create** new items  
- **Read** all or single items  
- **Update** existing items  
- **Delete** items  
- Instant UI updates (no page reload)  
- Responsive design with Tailwind CSS  
- API verification via Thunder Client  
- Database inspection via MongoDB Compass  

---

## 🛠 Tech Stack

| Layer     | Technology                       |
| --------- | -------------------------------- |
| **API**   | Node.js · Express                |
| **DB**    | MongoDB · Mongoose               |
| **Frontend** | Next.js · React · Tailwind CSS |
| **HTTP**  | Axios                            |
| **Env**   | dotenv · CORS                    |
| **Testing** | Thunder Client · MongoDB Compass |

---

## 📁 Folder Structure

```

crud-app/
├── backend/
│   ├── models/
│   │   └── Item.js
│   ├── routes/
│   │   └── itemRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
├── components/
│   ├── ItemForm.js
│   └── ItemList.js
├── pages/
│   └── index.js
├── styles/
│   └── globals.css
├── tailwind.config.js
└── package.json

````

---

## ⚙️ Setup & Run

### Prerequisites

- Node.js (v16+)  
- MongoDB (running locally)  
- VS Code (Thunder Client extension recommended)  

---

### Backend

1. **Install dependencies**  
   ```bash
   cd backend
   npm install
````

2. **Configure environment**
   Create a `.env` file in `backend/`:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/crudapp
   ```
3. **Start server**

   ```bash
   npm start
   ```
4. **Verify**

   * Base URL: `http://localhost:5000/api/items`
   * Test endpoints in Thunder Client or MongoDB Compass.

---

### Frontend

1. **Install dependencies**

   ```bash
   cd frontend
   npm install
   ```
2. **Start dev server**

   ```bash
   npm run dev
   ```
3. **Open in browser**
   [http://localhost:3000](http://localhost:3000)

---

## 🧪 API Reference

*All routes are defined in* `backend/routes/itemRoutes.js` *and mounted at* `/api/items`

```js
import express from 'express'
import Item from '../models/Item.js'
const router = express.Router()

// CREATE → POST /api/items
router.post('/', async (req, res) => { … })

// READ ALL → GET /api/items
router.get('/', async (req, res) => { … })

// READ ONE → GET /api/items/:id
router.get('/:id', async (req, res) => {
  // return 404 if not found
})

// UPDATE → PUT /api/items/:id
router.put('/:id', async (req, res) => {
  // runValidators: true, return new document
})

// DELETE → DELETE /api/items/:id
router.delete('/:id', async (req, res) => { … })

export default router
```

| Method     | Endpoint         | Description             |
| ---------- | ---------------- | ----------------------- |
| **POST**   | `/api/items`     | Create a new item       |
| **GET**    | `/api/items`     | Retrieve all items      |
| **GET**    | `/api/items/:id` | Retrieve one item       |
| **PUT**    | `/api/items/:id` | Update an existing item |
| **DELETE** | `/api/items/:id` | Delete an item          |

---

## 🙌 Credits

Built with ❤️ by **Okasha Nadeem**
