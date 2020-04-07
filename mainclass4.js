/*
Special characters:
{ } &  [ ] < > | / \ *  ^  ~  #  _  :   ;

\n: new line
\t: tab


OPERATORS
Numerical + - * /
Comparison === strict equality  !== strict inequality  < > <= >= greater / less or equal
Logical || or  && and ! not
Combined 	+= -= *= /= ++   

Operator ++ and -- increase (or decrease) the value of a variable by 1
*/

//---------------------------------------------------------------------------------


// class 4- 
//Functions
//Set of statments that either perform a task or calculate a value

/*
rules of if, else if, else
if (condition1) {
  // some code ...
} else if (condition2) {
  // some other code ...
} else if (condition3) {
  // code, code, code ...
} else {
  // even more code ...
}

// JavaScript will continue from here.
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


//Functions
/*
Functions always have parentesis ()
everything after return doesnt count
A function is a reusable block of code.
*/

//A very simple function would be:

function myFunction() {
  console.log("I am in a function!");
}

/*
To create a function:
- function
- name of the function
- (param1, param2, ...) parameters are just like variables
- { ... } the block where we have our code
- we might add a return at the end, depending on what we need.

function sayHello() { 
  //the block where we have our code
  console.log("Hello There!");

  console.log("...");

  console.log("General Kenobi!");
}

sayHello();
*/


//Calling a function
function sayHello(){
  console.log("Hello!");
}
sayHello();
//The function sayHello does not require any parameters that is why the parenthesis () are empty.
//When no return, consol says indefined

// ask if a parameter is a variable and if you can name a variable with the same name
function greet(name){
  console.log("Hello " + name + "!");
}
greet("Bob");  // "Hello Bob !"

//The function greet takes one parameter: name 
//that is why we write "Bob" in the parenthesis. we are giving the value "Bob" to the function.

/*
EXERCISE
Write a function called celsiusToFahrenheit, which takes the degrees in C, and returns it in F.
test your function with the values 28 and 31.
Fahrenheit = Celsius multiplied by 1.8 plus 32
*/

//before
let degreesInCelsius= 28;
// let degreesInFahrenheit= ???; Fahrenheit = Celsius multiplied by 1.8 plus 32
let degreesInFahrenheit = degreesInCelsius * 1.8 + 32; 
console.log("28 degrees Celsius= " + degreesInFahrenheit + " degrees Fahrenheit");


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
*/

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



//Homework 1
//Write a function that takes name of a person, their age, and the language they speak, and returns a string that introduces this person.

//performing a task
function hola(theName, theAge, theLanguage) {
  console.log("Hola my name is " + theName + ", I'm " + theAge + " years old " + "and I speak " + theLanguage);
}

hola("Claire", 23, "French"); //Hola my name is Claire, I'm 23 years old and I speak Spanish

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

// let employeeBonus = (regularDay * 200) + (extraDay * 20);
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






