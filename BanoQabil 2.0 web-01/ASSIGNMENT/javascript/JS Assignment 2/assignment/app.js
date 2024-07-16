// question No: 01
var q1 = 10
console.log("the value of a is:")
console.log(q1)

console.log("the value of ++a is:")
console.log(++q1)
console.log("Now the value of a is:")
console.log(q1)

console.log("the value of a++ is:")
console.log(q1++)
console.log("Now the value of a is:")
console.log(q1)

console.log("the value of --a is:")
console.log(--q1)
console.log("Now the value of a is:")
console.log(q1)

console.log("the value of a-- is:")
console.log(q1--)
console.log("Now the value of a is:")
console.log(q1)

// question No: 02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// 1. `--a;`
//    - We start with `a` equal to 2.
//    - We decrease the value of `a` by 1 (pre-decrement), so `a` becomes 1.

// 2. `--a - --b;`
//    - Now, `a` is 1, and `b` is 1.
//    - We decrease both `a` and `b` by 1 (pre-decrement).
//    - The expression becomes 1 - 0, resulting in 1.

// 3. `--a - --b + ++b;`
//    - `a` is now 0, and `b` is 0.
//    - We decrease `a` and `b` by 1 (pre-decrement), and then increase `b` by 1 (pre-increment).
//    - The expression becomes 0 - (-1) + 1, resulting in 2.

// 4. `--a - --b + ++b + b--;`
//    - `a` becomes -1, and `b` becomes -1.
//    - We decrease `a` and `b` by 1 (pre-decrement), increase `b` by 1 (pre-increment), and use the current value of `b` before decreasing it by 1 (post-decrement).
//    - The expression becomes -1 - (-2) + 0 + (-1), resulting in 0.

// So, after the execution of the script, the values will be:
// - `a` is -1
// - `b` is -2
// - `result` is 0

// question No: 03
var userName = prompt ("Please entre your Name");
console.log(userName);
alert ("Welcome to our Website")

// question No: 04
var usernum = parseInt(prompt("Enter a number", 5));

for (let i = 0; i < 10; i++) {
    usernum *= 2;
    console.log(usernum);
}

// question No: 05
var sub1 = prompt ("please insert the first Subject")
console.log (sub1)
var sub2 = prompt ("please insert the second Subject")
console.log (sub2)
var sub3 = prompt ("please insert the third Subject")
console.log (sub3)
var totalmarks = 100
var obtsub1 = prompt ("please inser the first Subject marks")
console.log (obtsub1)
var obtsub2 = prompt ("please inser the second Subject marks")
console.log (obtsub2)
var obtsub3 = prompt ("please inser the third Subject marks")
console.log (obtsub3)

var sum = obtsub1,obtsub2,obtsub3
console.log (sum)

