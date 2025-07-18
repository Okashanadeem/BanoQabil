# Class 06 _ 🛒 Product API - Node.js + MongoDB (Local) Setup

A simple Node.js REST API to **add** and **get** products using **Express** and **MongoDB (Compass local)**.

---

## 📂 Folder Structure

```

product-api/
├── index.js               # Main entry point of the app
├── models/
│   └── Product.js         # Mongoose schema for products
├── routes/
│   └── productRoutes.js   # API route handlers
├── package.json           # Project metadata & scripts

````

---

## ⚙️ Step-by-Step Setup and Explanation

### 1️⃣ Create the Project Folder

```bash
mkdir product-api
cd product-api
````

> 📌 Creates a new folder for the Node.js project and navigates into it.

---

### 2️⃣ Initialize Node.js Project

```bash
npm init -y
```

> 📌 Generates a default `package.json` file that tracks dependencies and scripts.

---

### 3️⃣ Install Dependencies

```bash
npm install express mongoose nodemon
```

> 📌 Installs:

* `express` → for creating the server and handling routes
* `mongoose` → to connect and interact with MongoDB
* `nodemon` → auto-restarts the server on file changes

---

### 4️⃣ Add Start Script in `package.json`

```json
"scripts": {
  "start": "nodemon index.js"
}
```

> 📌 Allows you to run the server using just:

```bash
npm start
```

---

## 🔌 How to Connect to MongoDB

In your `index.js` file, make sure you include the following:

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/products-db')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));
```

> 🧠 `mongodb://127.0.0.1:27017/products-db` means:

* **127.0.0.1**: Localhost
* **27017**: Default MongoDB port
* **products-db**: Database name (auto-created if it doesn't exist)

You can now view this DB using **MongoDB Compass**.

---

## 💡 Explanation of Each File

### 🔹 `index.js` (Entry Point)

```js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json()); // Allows POST JSON

mongoose.connect('mongodb://127.0.0.1:27017/products-db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

> 📌 This file:

* Connects to MongoDB
* Starts Express server
* Uses middleware to parse JSON
* Loads product routes

---

### 🔹 `models/Product.js` (Schema)

```js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

module.exports = mongoose.model('Product', productSchema);
```

> 📌 Defines how a product should look in MongoDB

---

### 🔹 `routes/productRoutes.js` (Routes)

```js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST /api/products
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
```

> 📌 Handles two API endpoints:

* `POST /api/products` → Add a new product
* `GET /api/products` → List all products

---

## 🔁 Start the Server

```bash
npm start
```

Expected output:

```
MongoDB connected
Server is running on port 3000
```

---

## 🧪 Test with Thunder Client

### 🔹 POST a Product

* Method: `POST`
* URL: `http://localhost:3000/api/products`
* Body (JSON):

```json
{
  "name": "Tablet",
  "price": 15000,
  "description": "Android 10-inch tablet"
}
```

### 🔹 GET All Products

* Method: `GET`
* URL: `http://localhost:3000/api/products`

> 🔎 You’ll get a JSON array of products saved in MongoDB.

---

## 🧭 View Products in MongoDB Compass

1. Open MongoDB Compass
2. Connect to: `mongodb://127.0.0.1:27017`
3. Open the `products-db` database
4. View the `products` collection to see added data

---

## ✅ Final Tips

* MongoDB must be **running** before starting your server (`mongod`)
* Thunder Client is perfect for local testing
* MongoDB Compass helps you visually manage your database

---

## 📌 Example Commands Recap

```bash
# Create project
mkdir product-api && cd product-api

# Initialize npm
npm init -y

# Install dependencies
npm install express mongoose nodemon

# Start server
npm start
```

