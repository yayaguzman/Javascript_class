/*class 1- 
Special characters:
{ } &  [ ] < > | / \ *  ^  ~  #  _  :   ;
Data types:
Number: " " or ' ' if both, needs: "He said: \"Hello\"" escaped with \ 
String: + - floating point 4.6
Boolean: true or false
Undefined: undefined
control characters:
\n: new line
\t: tab
Open console on Chrome: alt+cmd+j= console
*/
"Yadira"
39
true

/*Operators	
Numerical + - * /	5 + 4 * 3   "Hello" + " World" only used with String and numbers

Comparison 	=== !== < > <= >=	temperature !== 25   age >= 18
=== strict equality  !== strict inequality  > greater than < less than  >= greater or equal <= less or equal

Logical 	|| && !	            a && !b     x >= 5 && x < 15 only used with Boolean
&& Logical AND (returns true if both booleans are true)
|| Logical OR  (returns true if at least one is true)
!  Logical NOT (negates a boolean  !true  // false   !false // true)

Combined 	+= -= *= /= ++      a *= 2 count++
*/

39 + 1 //I'll be 40 next year/
8 **2 //square of 8 is 64/
42 < 20 && 42 < 35  // false - I am not the youngest person
42 < 20 || 42 < 35  // false - I am not younger than at least one other person

//----------------------------------------------------------------------------------

/*class 2- 
Output values
console.log("hello"); only visible to developers
*/
console.log("hello from javascript");
console.log("hello");
console.log(3*4+5);

/*
Variables (A pointer to some data or value.) 
To write a variable we need:
let or var + space, =, the value we want, ;
Use use letters, numbers and underscore _ (dont use spaces and the var name cannot start with a number)
'camelCase': likesGermanFood (good practice)
Variable are case sensitive: name Name NAME are differente variables
Give descriptive name and boolean should be answer with yes or no ex. isMarried

Output, you need to write the variable first to be able to output it with console
let name = "Obi-Wan Kenobi";
console.log(name); // correct/
*/

let name = "Yadira";
let age = 39;
let city ="Bogota";
let speaksGerman = true;
console.log("My name is " + name +  ", " + "I am " + age + " years old and " + "I am from " + city + ", " + speaksGerman + ", I can speak some German");
//My name is Yadira, I am 39 years old and I am from Bogota, true, I can speak some German/

let firstName = "Yadira";
let lastName = "Guzman";
let fullName = firstName + " " + lastName; //Variables can also result from other variables/

console.log("My full name is " + fullName); //My full name is Yadira Guzman/

//Exercise/
let degreesInCelsius= 28;
// let degreesInFahrenheit= ???; Fahrenheit = Celsius multiplied by 1.8 plus 32
let degreesInFahrenheit = degreesInCelsius * 1.8 + 32; 
console.log("28 degrees Celsius= " + degreesInFahrenheit + " degrees Fahrenheit");

let degreesInFahrenheit_2 = 82.4;
let convertFahrenheitToCelsius_1 = degreesInFahrenheit_2 - 32;
let convertFahrenheitToCelsius_2 = convertFahrenheitToCelsius_1 / 1.8;
console.log("82 degrees Fahrenheit= " + convertFahrenheitToCelsius_2 + " degrees Celsius");
//or
console.log("82 degrees Fahrenheit= " + (degreesInFahrenheit_2 - 32) / 1.8 + " degrees Celsius");

/*Homework
online shop= 1 customer buys 2 hats (3.99€ each) and 3 t-shirts (9.99€ each), output the final cost.
*/

let hat = 3.99;
let tShirt = 9.99;
let customerShoppingCar = hat * 2 + tShirt * 3;
console.log("Homework 1: The total price is " + customerShoppingCar + "Euros");

//Homework solution/
let hatPrice = 3.99;
let tShirtPrice = 9.99;

let hatAmount = 2;
let tShirtAmount = 3;

let totalHatPrice = hatAmount * hatPrice;
let totalTShirtPrice = tShirtAmount * tShirtPrice;

let totalCost = totalHatPrice + totalTShirtPrice;

console.log(totalCost);

//examples of more advanced variables: all of this is inside only one object/
var richObject = { 
    firstNameRich: "Rich",
    lastNameRich: "Amtem",
    favColors: [ "blue", "red", "green" ],
    yearsAlive: 103,
    isMale: true,
}; 
//copy - paste all above in the console, to get a property write var name . and object
//richObject.firstNameRich it will give you Rich

//----------------------------------------------------------------------------------

/*class 3- 
Passing basic data types
All basic data types (number, string, ...) are passed by value.
If you assign a variable to another variable, its value is copied.
let x = 42;
let y = x;
x = 43;
console.log(x);
console.log(y);
Answer: x is 43, y is 42

2 + 2 * 2 = 6
(2 + 2)
*/
//not true it returns 64 instead of 28
let degreesInFahrenheitTotal = degreesInFahrenheit_2 - 32 / 1.8; 

console.log("82 degrees Fahrenheit= " + (degreesInFahrenheit_2 - 32) / 1.8 + " degrees Celsius");
console.log(degreesInFahrenheitTotal);

/*
Logical 	|| && !	            a && !b     x >= 5 && x < 15 only used with Boolean
&& Logical AND (returns true if both conditions are true)
true && true = true
true && false = false
false && true = false
false && false = false

|| Logical OR  (returns true if at least one is true)
true || true = true
true || false = true
false || true = true
false || false = false

!  Logical NOT (negates a boolean)
!true = false   
!false = true

OPERATORS
Numerical + - * /
Comparison === strict equality  !== strict inequality  < > <= >= greater / less or equal
Logical || or  && and ! not
Combined 	+= -= *= /= ++   

Operator ++ and -- increase (or decrease) the value of a variable by 1

++ 
let myAge = 42;
myAge++; // same as myAge = myAge + 1

*=
a *= 2 count++

/=
let price = 10;
// there's a 50 percent sale!
price /= 2;
Result: 5
*/


/*  
RULES OF: if, else if, else:
if (condition MUST BE A BOOLEAN) {
  stament
}
else if (anotherCondition) {
  stament
}
else if (yetAnotherCondition) {
  stament
}
else {
  stament
}

if:
if (condition) {
  block of code that will run ONLY if condition is true
}
if else:
if (condition) {
  block of code that will run ONLY if condition is true
}
else {
  block of code that will execute only if condition is false.
}

else:
if (condition) {
  block of code that will run ONLY if condition is true
}
else if (secondCondition) {
  block of code that will execute only if all conditions above are false and its condition is true.
}
else {
  block of code that will execute only if condition is false.
}

if (condition1) {
  some code ...
} else if (condition2) {
  some other code ...
} else if (condition3) {
  code, code, code ...
} else {
  even more code ...
}

JavaScript will go through the if/else-if/else statements from top to bottom.
In our example, it will check condition1, then condition2, then condition3…
If one of the conditions evaluates to true, JavaScript will execute it’s code block AND IGNORE EVERYTHING ELSE

*/

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good morning")
}
else if (hour >= 12 && hour < 18) {
  console.log("Good afternon")
}
else {
  console.log("Good evening")
}
//-----------------------

//CODE BLOCKS: {} should be indented for better readability:
  // In VSCode, you can indent code by pressing the "Tab" key,
  // or right-click and choose "Format Document"
let canSpeakGerman = true;  
if (canSpeakGerman === true) {
  console.log("Guten Tag");
}

//All variables created in code blocks will disappear after closing the block 
//(technical term: “block scope”) {all should be inside here}
let name2 = "John Doe";

let greeting;
if (name2 === "John Doe") {
  greeting = "Hi dude";
}
if (name2 === "Mary Doyle") {
  greeting = "Hello my dear";
}
console.log(greeting); // "Hi dude"


//QUIZ What does it print?

let food = "broccoli";

if (food === "pizza") {
    console.log("yum yum");
}
// doesn't print anything because the variable food is = broccoli and not pizza

//QUIZ 2 What does it print?

let age2 = 42;

if (age2 >= 18) {
    console.log("you are allowed to drive a car");
}
// it will print you are allowed to drive a car becase let age2 is higher than 18

//------------
// LETS CODE: person with the highest value of their height plus five times their age wins
// First player 160cm + five times 39
// Second player 157cm + five times 74

let ageFirstPlayer = 39;
let heightFirstPlayer = 170;
let ageSecondPlayer = 74;
let heightSecondPlayer = 157;
let scoreFirstPlayer = (ageFirstPlayer * 5) + heightFirstPlayer;
let scoreSecondPlayer = (ageSecondPlayer * 5) + heightSecondPlayer;

let resultado;
if(scoreFirstPlayer > scoreSecondPlayer ){
  resultado = "First Player is the winner!";
}
if(scoreFirstPlayer === scoreSecondPlayer ){
  resultado = "both players win!";
}
else{
  resultado = "Second Player is the winner!";
}
console.log(resultado);

//second option "ask why it doesnt print and how show the score"
/*
if(scoreFirstPlayer > scoreSecondPlayer ) {
  console.log = ("First Player is the winner with" + " " + "--" + " " + "points");
}
if(scoreFirstPlayer === scoreSecondPlayer ) {
  console.log = ("All players are winners!!! with" + " " + "--" + " " + "points");
}
if(scoreFirstPlayer < scoreSecondPlayer ) {
  console.log = ("Second Player is the winner with" + " " + "--" + " " + "points");
}
*/

/*teacher example
let myAge = 42;
let myHeight = 160;
let player1Age = 35;
let player1Height = 174;
let myScore = myHeight + (5 * myAge);
let player1Score = player1Age + (5 * player1Height);
if (myScore > player1Score) {
    console.log("I win!");
}
if (myScore === player1Score) {
    console.log("It's a draw!");
}
if (myScore < player1Score) {
    console.log("I lost");
}
*/

//if else

let temperature2 = 30;
if (temperature2 > 25) {
  console.log("Go swimming");
} else {
  console.log("Go biking");
}

let day= "Saturday";
if (day === "Saturday") {
  console.log("Do all the shopping.");
} else if (day === "Sunday") {
  console.log("Relax!");
} else {
  console.log("Wake up and go to work!");
  }

/*
EXERCISE
Make three if statements
Make a "Good day" greeting if the hour is less than 18
Make a statement that only says “Hello” to someone with your name.
Make a statement that prints "I am younger" if your age is less than your neighbor's
*/

let myName3 = "Yadira";

if (myName3 === "Yadira") {
  console.log("Hello " + myName3);
}


let time = 8;

if (time <= 18) {
  console.log("Good day");
} else {
  console.log("Good evening");
}


let myAge3 = 39;
let myNeighborAge = 52;

if (myAge3 < myNeighborAge) {
  console.log("I am younger");
} else{
  console.log("I am older");
}

//Describe the weather based on the temperature:
//Above 30
//Above 20
//Above 5
//Everything else

let temperature3 = 35;

if (temperature3 > -100 && temperature3 < 5) {
  console.log("it is cold");
} else if (temperature3 > 5 && temperature3 <20) {
  console.log("the weather is ok, not too cold and not too hot");
} else if (temperature3 > 20 && temperature3 <30) {
  console.log("it is getting hot!");
} else {
  console.log("it is super hot!!!");
}

/*teacher example

let temperature = 35;

if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.")
}
*/

//----------------------------------------------------------------------------------

// class 4- 
//Functions
//Set of statments that either perform a task or calculate a value
/*
EXERCISE
Simple program that calculates the bonus an employee will get at the end of the year.
(regular day: 1€, extra: 3€ bonus)
a pay raise, if more than 250€ bonus.
nothing, if less than 100€.
a chocolate box, for any other bonus.
What does an employee with 200 regular days and 20 extra get?
*/

let regularDay = 1;
let extraDay = 3;
let employeeBonus = (regularDay * 200) + (extraDay * 20);

if (employeeBonus < 100) {
  console.log("Sorry, you do not get any bonus");
} else if (employeeBonus > 250) {
  console.log("Great, you get a pay raise with " + employeeBonus + " " + "bonus!!" );
} else{
  console.log("You get a chocolate box");
}
//Great, you get a pay raise with 260 bonus!!


/*
Functions always have parentesis ()
everything after return doesnt count
A function is a reusable block of code.

A very simple function would be:

function myFunction() {
  console.log("I am in a function!");
}

To create a function:
function
name of the function
(param1, param2, ...) parameters are just like variables
{ ... } the block where we have our code
we might add a return at the end, depending on what we need.
*/



/*
function sayHello() { 
  //the block where we have our code
  console.log("Hello There!");

  console.log("...");

  console.log("General Kenobi!");
}

sayHello();


Calling a function
function sayHello(){
  console.log("Hello!");
}
sayHello();
The function sayHello does not require any parameters that is why the parenthesis () are empty.

When no return, consolo says indefined

function greet(name){
  console.log("Hello " + name + " !");
}
greet("Bob");
// "Hello Bob !"

The function greet takes one parameter: name 
that is why we write "Bob" in the parenthesis. we are giving the value "Bob" to the function.

EXERCISE
Write a function called celsiusToFahrenheit, which takes the degrees in C, and returns it in F.
test your function with the values 28 and 31.
Fahrenheit = Celsius multiplied by 1.8 plus 32

before
let degreesInCelsius= 28;
// let degreesInFahrenheit= ???; Fahrenheit = Celsius multiplied by 1.8 plus 32
let degreesInFahrenheit = degreesInCelsius * 1.8 + 32; 
console.log("28 degrees Celsius= " + degreesInFahrenheit + " degrees Fahrenheit");
*/

function celsiusToFahrenheit(degreesCelsius) {
  let degreesFahrenheit = degreesCelsius * 1.8 + 32;
  return degreesFahrenheit;
}

console.log("28 degrees: " + celsiusToFahrenheit(28));
console.log("32 degrees: " + celsiusToFahrenheit(32));

/*
Exercise
Write a min function that returns the smaller of the two arguments passed to it: 

min(1, 2);    // should return 1
min(100, 99); // should return 99
min(-10, 0);  // should return -10

---I DID NOT UNDERSTAND IT---
Solution 
function min(number1, number2) {
  if (number1 <= number2) {
    return number1;
  } else {
    return number2;
  }
}

console.log('min of 1 and 2 is ' + min(1, 2));
console.log('min of 100 and 99 is ' + min(100, 99));
console.log('min of -10 and 0 is ' + min(-10, 0));
*/


//Homework 1
//Write a function that takes name of a person, their age, and the language they speak, and returns a string that introduces this person.

//performing a task
function hola(theName, theAge, theLanguage) {
  console.log("Hola my name is " + theName + ", I'm " + theAge + " years old " + "and I speak " + theLanguage);
}

hola("Claire", 23, "Spanish"); //Hola my name is Claire, I'm 23 years old and I speak Spanish

//calculating a value
function square(numbers) {
  return numbers * numbers;
}
console.log(square(2)); //4

/*Homework 2
Change the employee solution from before, and turn it into a function.
The function should accept the number of normal days and number of extra days as parameters!
let regularDay = 1;
let extraDay = 3;
let employeeBonus = (regularDay * 200) + (extraDay * 20);

if (employeeBonus < 100) {
  console.log("Sorry, you do not get any bonus");
} else if (employeeBonus > 250) {
  console.log("Great, you get a pay raise with " + employeeBonus + " " + "bonus!!" );
} else{
  console.log("You get a chocolate box");
}
*/


function employeeBonuss(regularDay, extraDay) {
  if (employeeBonus < 100) {
    console.log("Sorry, you do not get any bonus");
  } else if (employeeBonus > 250) {
    console.log("Great, you get a pay raise with " + employeeBonus + " " + "bonus!!" );
  } else{
    console.log("You get a chocolate box");
  }
}

employeeBonuss(1, 3); 


//Call a function on the html file
// this should be on the html <button onclick="onButtonClick()">  Click me  </button>

function onButtonClick() {
  console.log("You have clicked the button");
}



/*
Class 5 = JAVASCRIPT + HTML
1. Create a new folder
2. Create a html file index.html:
<html>
<body>
   <script src="main.js"></script>
</body>
</html>

3. Create a JS file main.js:
console.log("Hello from JavaScript");

ex:
html:
<button onclick="onButtonClick()">

js
function onButtonClick() {
    console.log("Button has been clicked!");
}

function myBtnChangeColor_1() {
    document.body.style.backgroundColor = "white";
}

--------------------

Class 6= LOOPS








/*
Object literal
let person {
  name: "Jean",     //this are keys or properties this object has 2 keys
  age: 34
};
console.log(person);

//dot notation 
person.name = 'John';

//bracket notation "when we dont know the name and useris provinding it"
let selecrtion = 'name';
person['name'] ='Mary';
console.log(person.name);
*/


