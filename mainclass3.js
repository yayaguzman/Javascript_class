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
//----------------------------------------------------------------------------------

//Index
const songTitle = "Space Oddity";  //from0
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade";

let firstLetter = songTitle[0]; //S
let seventhLetter = songTitle[6]; //  0   spaces counts too
let lastLetter = lyrics[lyrics.length - 1]; //e   last letter
console.log(firstLetter); //S
console.log(seventhLetter); // 0
console.log(lastLetter); // e


/*class 3- 
Passing basic data types

All basic data types (number, string, ...) are passed by value.
If you assign a variable to another variable, its value is copied.
*/
let x = 42;
let y = x;
x = 43;
console.log(x);
console.log(y);
//Answer: x is 43, y is 42


/*
OPERATORS
Numerical + - * /
Comparison === strict equality  !== strict inequality  < > <= >= greater / less or equal
Combined 	+= -= *= /= ++   

Operator ++ and -- increase (or decrease) the value of a variable by 1
*/

//++ 
let myAge = 64;
myAge++; // same as myAge = myAge + 1
//Result: 65
console.log(myAge);

//*=
myAge *= 2
//Result: 128
console.log(myAge);

// /=
let price = 10;
// there's a 50 percent sale!
price /= 2;
//Result: 5


//Operator chaining
//1 + 2 + 3
//(1 + 2) + 3  // same as above
//(3) + 3      // returns 6


//Operator precedence
//Parentheses have the highest precedence (21) and always win:
(2 + 2) * 2   // 8
2 + (2 * 2)   // 6

/*  
STATMENTS: if, else if, else:
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

//CODE BLOCKS: {} shod be indented for better readability:
// In VSCode, you can indent code by pressing the "Tab" key,
// or right-click and choose "Format Document"

//asign value =
//isLooselyEqual ==
//Strictly equal ===

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
if (scoreFirstPlayer > scoreSecondPlayer) {
  resultado = "First Player is the winner!";
}
if (scoreFirstPlayer === scoreSecondPlayer) {
  resultado = "both players win!";
}
else {
  resultado = "Second Player is the winner!";
}
console.log(resultado);


//Another option

if(scoreFirstPlayer > scoreSecondPlayer ) {
  console.log("First Player is the winner with" + " " + scoreFirstPlayer + " " + "points");
}
else if(scoreFirstPlayer === scoreSecondPlayer ) {
  console.log("All players are winners!!! with" + " " + scoreSecondPlayer + " " + "points");
}
else{
  console.log("Second Player is the winner with" + " " + scoreSecondPlayer + " " + "points");
}


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

let day = "Saturday";
if (day === "Saturday") {
  console.log("Do all the shopping.");
} else if (day === "Sunday") {
  console.log("Relax!");
} else {
  console.log("Wake up and go to work!");
}
// Prints do all the shopping

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
} else {
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
} else if (temperature3 > 5 && temperature3 < 20) {
  console.log("the weather is ok, not too cold and not too hot");
} else if (temperature3 > 20 && temperature3 < 30) {
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






