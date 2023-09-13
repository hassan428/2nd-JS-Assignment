// Chapter 9 to 11

// USER INPUT & CONDITIONAL STATEMENT


// Question No 1

var city = prompt("Enter Your City", "Karachi");

if(city === "Karachi" || city === "karachi"){
    alert("Welcome to city of lights");
}


// Question No 2


var gender = prompt("Gender", "Male");

if(gender == "Male" || gender == "male"){
    console.log("Good Morning Sir");
}
else if(gender === "Female" || gender === "female"){
    console.log("Good Morning Ma'am");

}
else(console.log("Good Morning"))




// Question No 3


var trafficSignal = prompt("Color of Road Traffic Signal");

if(trafficSignal == "Red" || trafficSignal == "red"){
    console.log("Must Stop");
}

else if(trafficSignal === "Yellow" || trafficSignal === "yellow"){
    console.log("Ready to move");
}

else if(trafficSignal == "Green" || trafficSignal == "green"){
    console.log("Move now");
}
else(console.log("Please Fill Properly"))


// Question No 4


var fuel = +prompt("Remaining Fuel in Car (in litres)");

if(fuel < "0.25"){
    console.log("Please refill the fuel in your car");
}
else if(fuel >= "0.25"){
    console.log("Continue your Drive");
}
else(console.log("Please Correct Fill your Input Field"))




// Question No 5

//a

var a = 4;

if(++a === 5){
    alert("given condition for variable a is true");
}
    //Answer is 5



//b
var b = 82;

if (b++ === 83){
    alert("given condition for variable b is false");
}
    //Answer is 82



//c
var c = 12;
if (c++ === 13){
alert("condition 1 is false");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is false");
}
    //++c = 14 \\\ 14 < 14 is false

if(c === 14){
alert("condition 4 is true");
}



//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
    // This Condition is True


//e
if(true){
    alert("True");
}
    //Display

if (false){
    alert("False");
}
    //Not Diplay



//f
    if("car" < "cat"){
        alert("car is smaller than cat");
        }
        // r is smaller than t


// Question No 6

var firstSubject = +prompt("Enter First Subject Obtained Marks");
var secondSubject = +prompt("Enter Second Subject Obtained Marks");
var thirdSubject = +prompt("Enter Third Subject Obtained Marks");

var totalMarks = +prompt("Enter Total Marks")
var sum = firstSubject + secondSubject + thirdSubject

var percentage = sum / totalMarks * 100


if(percentage >= 80 && percentage <= 100){
    document.write("<h1>Marks Sheet</h1>")
    document.write("Total Marks: "+ totalMarks)
    document.write("<br>Marks Obtained: "+ sum)
    document.write("<br>Percentage: "+ percentage + "%")
    document.write("<br>Grade: A-one")
    document.write("<br>Remarks: Excellent")
}
else if(percentage >=70 && percentage <= 80){
    document.write("<h1>Marks Sheet</h1>")
    document.write("Total Marks: "+ totalMarks)
    document.write("<br>Marks Obtained: "+ sum)
    document.write("<br>Percentage: "+ percentage + "%")
    document.write("<br>Grade: A")
    document.write("<br>Remarks: Good")
}
else if(percentage >=60 && percentage <=70){
    document.write("<h1>Marks Sheet</h1>")
    document.write("Total Marks: "+ totalMarks)
    document.write("<br>Marks Obtained: "+ sum)
    document.write("<br>Percentage: "+ percentage + "%")
    document.write("<br>Grade: B")
    document.write("<br>Remarks: You need to improve")
}
else if(percentage >=50 && percentage <=60){
    document.write("<h1>Marks Sheet</h1>")
    document.write("Total Marks: "+ totalMarks)
    document.write("<br>Marks Obtained: "+ sum)
    document.write("<br>Percentage: "+ percentage + "%")
    document.write("<br>Grade: C")
    document.write("<br>Remarks: You need to Hard Struggle")
}
else if(percentage >=0 && percentage <=50){
    document.write("<h1>Marks Sheet</h1>")
    document.write("Total Marks: "+ totalMarks)
    document.write("<br>Marks Obtained: "+ sum)
    document.write("<br>Percentage: "+ percentage + "%")
    document.write("<br>Grade: Fail")
    document.write("<br>Remarks: Sorry")
}

else(document.write("Put correct Marks"))



// Question No 7

var secretNum = prompt("Guess the secret number (1 to 10)")
    
document.write("<h1>Bingo</h1>")
if(secretNum == 5){
    document.write("Bingo! Correct answer")
}
else if(secretNum == 4 || secretNum == 6){
    document.write("Close enough to the correct answer")
}
else(document.write("Sorry! Please Try Again"))



// Question No 8

var num = +prompt("Enter a Number")

if(num % 3 == 0){
    console.log(num + " is divisible by 3")
}
else(console.log(num + " is not divisible by 3"))




// Question No 9

var numBer = +prompt("Enter a Number")

if(numBer % 2 == 0){
    console.log(numBer + " is an Even Number")
}
else if(numBer % 2 !== 0){
    console.log(numBer + " is an Odd Number")
}



// Question No 10

var temperature = +prompt("Enter a Temperature")

if(temperature >=40 && temperature <=50){
    console.log("It is too hot outside.")
}

else if(temperature >=30 && temperature <=40){
    console.log("The Weather today is Normal.")
}

else if(temperature >=20 && temperature <=30){
    console.log("Today's Weather is cool.")
}

else if(temperature >=10 && temperature <=20){
    console.log("OMG! Today's weather is so Cool.")
}

else if(temperature >-10 && temperature <= 10){
    console.log("OMG! Today's weather is soooo Cooooool .")
}



// Question No 11

var firstNumber = +prompt("Enter a First Number")
var operation = prompt("Enter +, -, *, /, %")
var secondNumber = +prompt("Enter a Second Number")

if(operation === "+"){
    console.log(firstNumber + secondNumber)
}
else if(operation === "-"){
    console.log(firstNumber - secondNumber)
}
else if(operation === "*"){
    console.log(firstNumber * secondNumber)
}
else if(operation === "/"){
    console.log(firstNumber / secondNumber)
}
else if(operation === "%"){
    console.log(firstNumber % secondNumber)
}


// Chapter 9 to 11 Completed


// Chapter 12 to 13

// IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS



// Question No 2

var num1 = +prompt("Enter the First Integers")
var num2 = +prompt("Enter the Second Integers")

if(num1 === num2){
    console.log("Both Integers are equal")
}
else if(num1 > num2){
    console.log(num1 + " is Larger than "+ num2)
}
else(console.log(num2 + " is Larger than "+ num1))



// Question No 3

var numbers = +prompt("Enter a Number")

if(numbers > 0){
    console.log(numbers + " is Positive Numbers")
}
else if(numbers < 0){
    console.log(numbers + " is Negative Numbers")
}
else if(numbers == 0){
    console.log(numbers + " is Zero")
}
else(console.log("Please Enter only Number"))



// Question No 4


var char = prompt("Enter a Character")
char = char.toLowerCase();

if(char === "a" || char === "e" ||char === "i" ||char === "o" ||char === "u"){
    console.log(true)
}
else(console.log(false))




// Question No 5

var password = "abc123";
var userPass = prompt("Enter a Password");

if(password === userPass){    
    var userPass2 = prompt("Enter a Confirm Password");
    if(userPass === userPass2){
    alert("Correct! The password you entered matches the original password");
}
else(alert("Confirmation Password is incorrect"))
}
else(alert("Please enter your Correct password"))



// Question No 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else (greeting = "Good evening");

console.log(greeting)



