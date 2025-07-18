## 🧠 Class 04 – JavaScript Refresher Quiz & Coding Practice

In today's class, we focused on revising JavaScript core concepts through a 30-question quiz. Each question came with detailed explanations, helping us understand not just the correct answer but the logic behind it. The quiz covered topics such as:

* `typeof` behavior with special values like `null` and arrays
* Equality comparisons using `==` vs `===`
* Closures, hoisting, and the temporal dead zone
* Truthy/falsy values, coercion, and operators
* Arrow functions and the `this` keyword
* Array methods (`map`, `filter`, `push`, etc.)
* Asynchronous behavior with `setTimeout` and `async/await`
* JSON, `NaN`, and common JavaScript quirks

This deep dive was not just theoretical—each concept was grounded in real code snippets that tested our understanding.

### 🧪 Coding Questions

After the MCQs, we solved two small coding exercises that practiced real-world logic:

#### ✅ Q1 - Capitalize Each Word

We wrote a function that takes a sentence and capitalizes the first letter of every word.

**Code:**

```js
function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}
console.log(capitalizeWords("hello world this is a test"));
```

#### ✅ Q2 - Sum of Positive Numbers

This function receives an array and returns the sum of only the positive numbers.

**Code:**

```js
function sumPositive(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
console.log(sumPositive([1, -2, 3, 4, -5]));
```

### 📝 What We Learned

* Strong revision of JavaScript fundamentals and quirks
* Better understanding of how JS behaves under the hood
* Practiced problem-solving with small utility functions
* Improved logical thinking with `map`, conditionals, and loops
* Reinforced how async functions and error handling work in JS

📁 You can find the quiz and code snippets in the class materials.
