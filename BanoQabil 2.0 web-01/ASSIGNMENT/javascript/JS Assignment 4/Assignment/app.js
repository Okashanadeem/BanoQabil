// Question No: 01
var password = "123ismypassword"
var useinput = prompt("Please enter your password:");
if (!useinput) {
    alert("Please enter your password.");
}
else if (useinput === password) {
    alert("The password you entered is correct.");
}
else {
    alert("The password you entered is Incorrect");
}

// Question No: 02 
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// Question No: 03
// a)
var StudentsNameA = [];
// b)
var studentNamesB = [];
// c)
var stringsarrayC = ["Okasha", "Ali"];
// d)
var numbersarrayD = [1, 2, 3, 4, 5];
// e)
var booleanarrayE = [true, true, true, false,];
// f)
var mixedarrayF = ["Okasha", 1, true, false, { name: "okasha", age: 17 }];
// g)
var EducationG = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// Question No: 04
// Step 1: Initialize an array with color names
var colors = ["red", "blue", "purple"];

// Step 2: Display the array elements in the browser
document.write("<b>Initial array:</b> " + colors.join(", ") + "<br>");

// Step 3a: Add a color to the beginning of the array
var newColorBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(newColorBeginning);

// Step 3b: Add a color to the end of the array
var newColorEnd = prompt("Enter a color to add to the end:");
colors.push(newColorEnd);

// Step 3c: Add two more colors to the beginning of the array
colors.unshift("yellow", "orange");

// Step 3d: Delete the first color in the array
colors.shift();

// Step 3e: Delete the last color in the array
colors.pop();

// Step 3f: Add a color to a specific position/index
var indexToAdd = prompt("Enter the index to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);

// Step 3g: Remove colors from a specific position/index
var indexToDelete = prompt("Enter the index to delete color(s):");
var numToDelete = prompt("Enter the number of colors to delete:");
colors.splice(indexToDelete, numToDelete);

// Step 4: Display the updated array in the browser
document.write("<b>Updated array:</b> " + colors.join(", ") + "<br>");

// Question No: 05
var studentscore = [21, 39, 19, 51, 9, 101, 89, 61]
studentscore.sort()
console.log(studentscore)

// Question No: 06
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("manufacturers:", manufacturers)

// Question No: 07
var tableNumber = prompt("please entre the number of the multiplicationn table")
var tablelength = prompt("please entre the length of the multiplicationn table")
document.write("<h2>Multiplication table of " + tableNumber + "</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Multiplier</th><th>Result</th></tr>")
for (var i = 1; i <= tablelength; i++) {
    var result = tableNumber * i;
    document.write("<tr><td>" + tableNumber + " X " + i + "</td><td>" + result + "</td></tr>")
}
document.write("</table>");

// Question No: 08
// a)
document.write("<b>Counting:</b>");
for (var i = 0; i <= 15; i++)
    document.write(i + ",")
// b)
document.write("<b>Reverse counting:</b>")
for (var i = 10; i >= 1; i--) {
    document.write(i + ",")
}
// c)
document.write("<b>Even:</b>")
for (var i = 2; i <= 20; i += 2) {
    document.write(i + ",")
}
// d)
document.write("<b>Odd:</b>")
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ",")

}
// e)
document.write("<b>Series:</b>")
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "K,")
}

// Question No: 09
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter the item name");
var result = items.includes(search);

if (result) {
    alert(search + " is found in the list.");
} else {
    alert(search + " is not found in the list.");
}

// Question No: 10
var name = prompt("Enter your Name")

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

var nameResult = toTitleCase(name);
console.log(nameResult);

// Question No: 11
var yourname = prompt("Enter your Name");
var tocapital = yourname.toUpperCase();
alert("Name in Capital case" + tocapital)

// Question No: 12
var instring = "472"
var innumber = parseInt(instring)
console.log("original string:", instring, typeof instring)
console.log("converted Number", innumber, typeof innumber)


// DONE :)