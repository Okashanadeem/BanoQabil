// question no : 01
var cityname = prompt("please entre the your  City Name")
if (cityname === "KARACHI".toLowerCase()) {
    alert("Welcome to city of lights")
}
// question no : 02
var gender = prompt("please entre your Gender")
if (gender === "Male") {
    alert("Good Morning Sir")
}
if (gender === "Female") {
    alert(" Good Morning Ma’am.")
}
// question no : 03
var remfuel = prompt("please entre value of remaining fuel")
if (remfuel <= 0.25) {
    alert("Please refill the fuel in your car")
}
// part a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
    console.log(a)
}
// part b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
    console.log(b)
}
// part c 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
// part d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//   part e
if (true) {
    alert("True");
} if (false) {
    alert("False");
}
//    part f 
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// question no : 05
var guessnum = prompt("guess a number inside 1-10... lets see if you WIN")
if (guessnum === 5) {
    alert("Bingo! Correct answer")
}
else {
    alert("better luck next time")
}
// question no : 06
var divby3 = prompt("check the number you are tinking about is devisible of 3 or not")
if (divby3 % 3 === 0) {
    alert("This number is devisible")
}
else {
    alert("this number is not devisible of 3")
}
// question no : 07
var evenorodd = prompt ("check that the given number is Even or Odd")
if (evenorodd % 2 === 0) {
    alert ("Given number is Even")
}
else {
    alert ("Given number is Odd")
}
// question no : 08
var T = prompt ("Entre current Weather Temprature in your Location")
if (T > 40) {
    alert ("It is too hot outside.")
}
if (T > 30)  {
alert ("The Weather today is Normal.")
}
if (T > 20){
    alert ("if (T > 30)")
}
if (T > 10) {
    alert ("OMG! Today’s weather is so Cool.")
}
// question no : 09
// dont know
