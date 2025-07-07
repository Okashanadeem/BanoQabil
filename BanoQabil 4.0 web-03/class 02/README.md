````markdown
# Class 2: JavaScript Refresher

This session provided a powerful refresher on JavaScript fundamentals, preparing us for backend development with Node.js. We learned how JavaScript works under the hood, key concepts in asynchronous programming, object-oriented patterns, and much more.

---

## 🧠 What We Learned

### 🔸 Why JavaScript?

- ✅ Runs on both frontend (browser) and backend (Node.js)
- ✅ Universal language for full-stack development
- ✅ Event-driven, asynchronous by design
- ✅ Massive ecosystem (npm, frameworks, tools)

---

## 🔹 JavaScript Engine Basics

JavaScript is a **single-threaded**, **synchronous** language with **asynchronous capabilities** using the Event Loop and Call Stack.

Example:

```js
console.log("Start");
setTimeout(() => console.log("Delayed"), 1000);
console.log("End");
````

Output:

```
Start
End
Delayed
```

> JS runs synchronously, but offloads async operations like `setTimeout` or `fetch` to the Web API.

---

## 🔹 Scopes & Hoisting

* `let` and `const` → **block scoped**
* `var` → **function scoped** (avoid it)
* **Hoisting**: JS moves declarations to the top during compile phase.

Example:

```js
console.log(x); // undefined
var x = 5;
```

---

## 🔹 Data Types

### ✅ Primitive Types

* `string`, `number`, `boolean`, `null`, `undefined`, `symbol`

### ✅ Reference Types

* `object`, `array`, `function`

---

## 🔹 Variable Declaration

* `const`: Cannot be reassigned, but mutable for objects/arrays

  ```js
  const arr = [1, 2, 3];
  arr.push(4); // ✅ OK
  arr = [5, 6]; // ❌ Error
  ```

---

## 🔹 Functions vs Arrow Functions

* Arrow functions do **not** bind `this`
* Regular functions bind `this` to the caller context

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

## 🔹 Closures & Lexical Scope

Closures allow inner functions to "remember" variables from outer functions.

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

## 🔹 Useful Array Methods

### `map()`

Transforms array items.

```js
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

### `filter()`

Filters items based on condition.

```js
[1, 2, 3].filter(n => n > 1); // [2, 3]
```

### `reduce()`

Combines values into one.

```js
[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6
```

### `sort()`

Sorts items.

```js
[5, 1, 4].sort((a, b) => a - b); // [1, 4, 5]
```

---

## 🔹 Destructuring, Spread & Rest

```js
const { name, ...rest } = { name: "Sara", age: 25 };
console.log(name); // Sara
console.log(rest); // { age: 25 }

const arr = [1, 2, 3];
const clone = [...arr]; // [1, 2, 3]
```

---

## 🔹 Async JavaScript: Promises & Async/Await

### Using Promises:

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Using `async/await`:

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

## 🔹 Classes and Prototypes

JavaScript uses prototype-based inheritance under the hood, even in class syntax.

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

## 🔸 Common Built-in Functions

* `console.log()` → Print to console
* `JSON.stringify()` → Convert object to JSON string

---

## 📝 Quiz Topics (for 4th Class)

Make sure you review:

* Variable types & scopes
* Loops (`for`, `while`)
* Callbacks & Promises
* `async/await`
* Algorithm-based logic questions
* Array methods

---

## ✅ Key Definitions

| Concept       | Meaning                                                                |
| ------------- | ---------------------------------------------------------------------- |
| Closure       | Function remembers its outer scope variables even after parent is done |
| Lexical Scope | Scope defined by code position (where the function is written)         |
| Prototype     | Inheritance chain used by JS objects and classes                       |
| this          | Refers to current execution context, except in arrow functions         |

---

📅 **Next Class Preview**:
We will dive into **Node.js Basics** and solve logic-based and async programming problems.

