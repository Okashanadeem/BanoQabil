# 📚 Class 2: JavaScript Refresher

This session provided a powerful refresher on JavaScript fundamentals to prepare us for backend development with Node.js. We explored how JavaScript works under the hood, asynchronous programming concepts, object-oriented patterns, and more.

---

## 🧠 What We Learned

### 🔹 Why JavaScript?

- ✅ Runs on both frontend (browser) and backend (Node.js)
- ✅ Universal language for full-stack development
- ✅ Event-driven and asynchronous by nature
- ✅ Massive ecosystem (npm, frameworks, tools)

---

## ⚙️ JavaScript Engine Basics

JavaScript is a **single-threaded**, **synchronous** language with **asynchronous capabilities** using the Event Loop and Call Stack.

```js
console.log("Start");
setTimeout(() => console.log("Delayed"), 1000);
console.log("End");
````

**Output:**

```
Start
End
Delayed
```

> JavaScript runs code synchronously but delegates async operations like `setTimeout` or `fetch` to the Web API.

---

## 🔐 Scopes & Hoisting

* `let` and `const` → **block scoped**
* `var` → **function scoped** (⚠️ avoid using)
* **Hoisting**: JavaScript moves declarations to the top during compilation.

```js
console.log(x); // undefined
var x = 5;
```

---

## 🔢 Data Types

### ✅ Primitive Types

* `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`

### ✅ Reference Types

* `object`, `array`, `function`

---

## 🧾 Variable Declaration

* `const`: Cannot be reassigned, but objects/arrays remain mutable.

```js
const arr = [1, 2, 3];
arr.push(4);      // ✅ Allowed
arr = [5, 6];     // ❌ Error
```

---

## 🔁 Functions vs Arrow Functions

* Arrow functions do **not** bind their own `this`.
* Regular functions bind `this` to the calling context.

```js
const obj = {
  name: 'Ali',
  greet() {
    setTimeout(() => console.log(this.name), 1000); // 'Ali'
  }
};
obj.greet();
```

---

## 🔄 Closures & Lexical Scope

Closures allow inner functions to access variables from outer functions, even after the outer function has finished executing.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const inc = outer();
inc(); // 1
inc(); // 2
```

---

## 📚 Useful Array Methods

### `.map()`

Transforms array items.

```js
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

### `.filter()`

Filters items based on a condition.

```js
[1, 2, 3].filter(n => n > 1); // [2, 3]
```

### `.reduce()`

Combines array values into a single value.

```js
[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6
```

### `.sort()`

Sorts items numerically or alphabetically.

```js
[5, 1, 4].sort((a, b) => a - b); // [1, 4, 5]
```

---

## 🧰 Destructuring, Spread & Rest

```js
const { name, ...rest } = { name: "Sara", age: 25 };
console.log(name); // Sara
console.log(rest); // { age: 25 }

const arr = [1, 2, 3];
const clone = [...arr]; // [1, 2, 3]
```

---

## ⏳ Async JavaScript: Promises & Async/Await

### ✅ Using Promises

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### ✅ Using Async/Await

```js
async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
```

---

## 🏛️ Classes and Prototypes

JavaScript uses prototype-based inheritance under the hood, even when using class syntax.

```js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}

const user = new User("Ali");
console.log(user.greet()); // Hello Ali
```

---

## 🔧 Common Built-in Functions

* `console.log()` → Print to console
* `JSON.stringify()` → Convert an object to a JSON string
* `JSON.parse()` → Convert JSON string to object
* `typeof` → Check data type

---

## 📝 Quiz Topics (for Class 4)

Be ready to answer questions about:

* Variable types and scopes
* Loops (`for`, `while`)
* Callbacks & Promises
* `async/await`
* Algorithmic logic
* Array methods (`map`, `filter`, `reduce`, etc.)

---

## 📌 Key Definitions

| Concept           | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| **Closure**       | A function that remembers variables from its outer scope                   |
| **Lexical Scope** | Scope determined by the location in the source code                        |
| **Prototype**     | Mechanism through which JavaScript objects inherit features                |
| **this**          | Refers to the current execution context (varies by how function is called) |

---

## 📅 Next Class Preview

We will dive into **Node.js Basics** and solve logic-based and asynchronous programming problems.

