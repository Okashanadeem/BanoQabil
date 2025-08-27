# 📚 Class 08 – Backend Project with JWT Authentication & Secure Passwording

This project builds a secure backend using **Node.js**, **Express**, **MongoDB**, and **JWT** for authentication. It follows the MVC pattern and includes validation, middleware, and password hashing with **bcrypt**.

---

## 📁 Folder Structure

```plaintext
.
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   └── orderController.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Order.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── validators/
│   └── product.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── validate.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## 🔧 Installed Dependencies

```bash
npm install express mongoose dotenv jsonwebtoken bcryptjs joi
npm install --save-dev nodemon
```

---

## 🚀 How to Run the Project

1. **Clone the repo**

   ```bash
   ```

git clone <your-repo-url>
cd <project-folder>

````
2. **Install dependencies**
   ```bash
npm install
````

3. **Create `.env` file**

   ```dotenv
   ```

MONGO\_URI=mongodb://localhost:27017/class08db
PORT=5000
JWT\_SECRET=\<your\_secret>

````
4. **Start MongoDB** (if local) or ensure Atlas connectivity.
5. **Run the server**
   ```bash
npm run dev
````

6. **Test endpoints** using Postman/Thunder Client (add `Authorization` header for protected routes).

---

## 🧠 Key Concepts

### ✅ What are Controllers?

Controllers handle **HTTP requests** and return appropriate responses, connecting **routes** to **models**.

*Example:* `authController.js` handles login, registration, and token creation.

---

### 🔐 What are Middleware?

Middleware functions run **before or after** route handlers, used for:

* Authentication (verifying JWT)
* Input validation
* Logging or request modification

*Example:* `authMiddleware.js` checks for a valid token before protected routes.

---

### 🧩 Why Models?

The `models/` folder defines **Mongoose schemas** for data entities (User, Product, Order), enabling structured DB interactions.

---

### 🌐 Why Routes?

The `routes/` folder maps endpoint paths to controller functions (e.g., `/auth/register`).

---

### ✅ Why Validators?

The `validators/` folder uses `joi` or `express-validator` to verify incoming data and protect against invalid/malicious inputs.

---

### 🌱 What is the `.env` File?

Stores sensitive config:

```dotenv
MONGO_URI=mongodb://localhost:27017/class08db
PORT=5000
JWT_SECRET=supersecretkey123
```

Loaded via `dotenv`.

---

### 🚀 What Happens in `index.js`?

* Connects to MongoDB with Mongoose
* Sets up global middleware
* Registers API routes
* Starts Express server

---

## 🔐 Authentication, JWT & Password Hashing – Theory Guide

### 🔑 Authentication vs Authorization

| Concept            | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| **Authentication** | Confirms *who* the user is (e.g., login)                     |
| **Authorization**  | Confirms *what* the user can access (e.g., protected routes) |

---

### 🎟 What is a Token?

A **token** is a string returned upon login, used for identifying users and included in subsequent requests:

```http
Authorization: Bearer <token>
```

---

### 🧾 What is JWT (JSON Web Token)?

A **self-contained**, signed token format with three parts:

1. **Header**: Algorithm & type (e.g., HS256)
2. **Payload**: User data (e.g., user ID)
3. **Signature**: Hash using secret key

**Flow:**

1. User logs in → server signs JWT
2. Client stores token (localStorage/cookie)
3. Client sends token in header
4. Server verifies and authorizes

```js
jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
```

---

### 🔒 What is Bcrypt?

* A password hashing library that creates secure, salted hashes.
* Irreversible: prevents retrieval of plain-text passwords.

**Usage:**

```js
// Hash before save
event.user.password = await bcrypt.hash(password, 10);
// Compare on login
await bcrypt.compare(password, user.password);
```

---

### ✅ Why Hash Passwords?

* Protects against data breaches
* Ensures no plain-text passwords stored
* Salting adds randomness for enhanced security

---

### 💡 Best Practices for JWT + Bcrypt

| Practice                             | Reason                                 |
| ------------------------------------ | -------------------------------------- |
| Use `.env` for secrets               | Keeps sensitive data out of code       |
| Set token expirations (`1h`/`1d`)    | Limits window for token abuse          |
| Use HTTPS in production              | Secures token in transit               |
| Never log raw passwords              | Prevents accidental leaks              |
| Always hash passwords before storing | Protects against DB compromises        |
| Use `bcrypt.compare()` for checking  | Secure and correct password comparison |

---

## 🧪 API Reference: Available Endpoints

### 🔐 Authentication Routes

#### 1. Register a New User

`POST /auth/register`

**Body**:

```json
{
  "name": "Ali Khan",
  "email": "ali@example.com",
  "password": "mypassword"
}
```

**Response**:

```json
{
  "user": { "id": "userId123", "name": "Ali Khan", "email": "ali@example.com" },
  "token": "<jwt_token>"
}
```

---

#### 2. Login User

`POST /auth/login`

**Body**:

```json
{
  "email": "ali@example.com",
  "password": "mypassword"
}
```

**Response**:

```json
{
  "user": { "id": "userId123", "name": "Ali Khan", "email": "ali@example.com" },
  "token": "<jwt_token>"
}
```

---

### 🛒 Product Routes

> **Protected** – requires `Authorization: Bearer <jwt_token>` header

#### 3. Create a New Product

`POST /products`

**Body**:

```json
{
  "name": "iPhone 15",
  "price": 1899,
  "description": "Latest Apple iPhone"
}
```

#### 4. Get All Products

`GET /products`

**Response**:

```json
[
  { "_id": "prod1", "name": "iPhone 15", "price": 1899, "description": "Latest Apple iPhone" },
  ...
]
```

#### 5. Update Product

`PUT /products/:id`

**Body**:

```json
{
  "name": "iPhone 15 Pro",
  "price": 2099,
  "description": "Upgraded model"
}
```

#### 6. Delete Product

`DELETE /products/:id`

---

### 📦 Order Routes

> **Protected** – requires `Authorization: Bearer <jwt_token>` header

#### 7. Create a New Order

`POST /orders`

**Body**:

```json
{
  "productId": "prod1",
  "quantity": 2
}
```

#### 8. Get All My Orders

`GET /orders`

**Response**:

```json
[
  { "_id": "order1", "productId": "prod1", "quantity": 2, "userId": "userId123" },
  ...
]
```

---

## 🔁 Recap: Key Concepts

* **Token** = String for identifying users
* **JWT** = Secure, signed token carrying user data
* **Bcrypt** = Safe password hashing tool
* **Authentication** = Who are you?
* **Authorization** = What are you allowed to do?

---

## ✅ Summary

In this class, we:

* Built a backend API with **secure login & JWT**
* Protected routes using **auth middleware**
* Validated inputs using **validators**
* Organized code using **MVC pattern**
* Hashed passwords using **bcrypt**
