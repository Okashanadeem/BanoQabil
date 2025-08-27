# Class 10 – Role-Based Access Control (RBAC) and API Security

## 📚 Overview

In this session, we explored **Role-Based Access Control (RBAC)**, discussed **why third-party libraries can be risky for authentication/authorization in Node.js**, introduced the **Lodash utility library**, and understood the concept of **API contracts**. We also received a practical assignment to implement a restaurant management system.

---

## 🔐 What is RBAC (Role-Based Access Control)?

**RBAC** is a security mechanism used to **restrict system access** based on the user's role within an organization. Rather than assigning permissions directly to users, permissions are assigned to roles, and users are granted roles.

### ✅ Benefits of RBAC:

* **Improved Security** – Users only access what they need.
* **Simplified Management** – Easy to manage user access.
* **Scalability** – Works well as the system grows.
* **Compliance** – Helps enforce policies and audits.

---

## 🛡️ Why Use RBAC?

RBAC allows you to:

* Protect sensitive routes (e.g., admin-only actions).
* Prevent unauthorized access and data leaks.
* Maintain clean and scalable permission structures.
* Commonly used in production-grade APIs.

---

## 🧪 Code Examples

### 1. Adding a `role` field to the User Schema

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'manager'],
    default: 'user'
  }
});
```

### 2. Creating Role-Based Middleware

```js
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
};

module.exports = checkRole;
```

### 3. Protecting Routes

```js
router.post(
  '/products',
  authenticateUser,
  checkRole('admin'),
  createProduct
);
```

---

## ⚙️ What is Lodash?

[Lodash](https://lodash.com/) is a popular JavaScript utility library that simplifies complex operations with arrays, objects, and functions. It helps with:

* Deep cloning
* Merging objects
* Filtering arrays
* Debouncing and throttling
* Working with nested data

It enhances **code readability** and **developer productivity**.

---

## ⚠️ Why Avoid Third-Party Auth Libraries in Node.js?

Using third-party libraries for authentication and authorization can introduce:

* **Security vulnerabilities** (if not maintained or misconfigured)
* **Reduced control** over logic and customization
* **Complex debugging** in case of issues
* **Compatibility risks** with other packages or updates

> Instead, it’s recommended to use well-known and secure libraries (like `jsonwebtoken`, `bcrypt`, etc.) and build your own wrappers for critical logic to retain control.

---

## 📄 What is an API Contract?

An **API contract** defines the expected request and response structure between a client and a server. It includes:

* Endpoints and their methods (`GET`, `POST`, etc.)
* Required headers
* Request body structure
* Response format
* Error handling structure

API contracts ensure **clear communication** between frontend and backend teams and enable **robust API testing** and documentation.

---

## 🧪 Assignment

### Build a **Restaurant Management System** with the following features:

* ✅ Implement RBAC with `user`, `admin`, and `manager` roles.
* 📝 Users with the appropriate role should be able to:

  * Add, update, and delete catalog items.
  * Upload images for items using `multer`.
* 🖥️ Create a **basic UI** for:

  * Regular users
  * Managers
  * Admins
* 🧪 Use **middleware** to protect sensitive routes based on roles.

---

## 🧠 Summary

* RBAC helps restrict access based on roles, making your app secure and maintainable.
* Middleware like `checkRole()` is a reusable way to protect routes.
* Lodash boosts development efficiency with helpful utilities.
* Avoid untrusted third-party libraries for core security features.
* API contracts define the communication protocol between services.

## Realated Links
* [Lodash Documentation](https://lodash.com/docs/)
* [RBAC Explained](https://www.ibm.com/think/topics/rbac)
* [API Contract Best Practices](https://bump.sh/blog/api-contracts-extended-introduction)
* [Multer Documentation](https://www.npmjs.com/package/multer)
* [JSON Web Tokens (JWT)](https://jwt.io/)
* [bcrypt for Password Hashing](https://www.npmjs.com/package/bcrypt)
