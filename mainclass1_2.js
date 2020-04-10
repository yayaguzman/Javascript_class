/*class 1- 

Special characters:
{ } &  [ ] < > | / \ *  ^  ~  #  _  :   ;

Data types:

Number: " " or ' ' if both, needs: "He said: \"Hello\"" escaped with \ 
String: + - floating point 4.6
Boolean: true or false
Undefined: a declared variable that hasn't been assigned a value yet
null: intentionaly having no value
Symbol:  a unique value that's not equal to any other value.
Object - entities with properties stored in key/value pairs
Array: Used to store multiple values in a single variable. Similar to a list

control characters:
\n: new line
\t: tab

Open console on Chrome: alt+cmd+j= console

JavaScript, or "JS" for short, is a full-fledged dynamic programming language that, 
when applied to an HTML document, can provide dynamic interactivity on websites.
*/

"Yadira" //string
39      //number
true    //boolean


/*Operators	
Numerical
 + - * /	5 + 4 * 3   "Hello" + " World" only used with String and numbers

Comparison 	
=== !== < > <= >=	    temperature !== 25   age >= 18
=== strict equality  !== strict inequality   > greater than   < less than   >= greater or equal  <= less or equal

Logical 	
|| && !	            a && !b     x >= 5 && x < 15 only used with Boolean
&& Logical AND (returns true if both booleans are true)     true true = true    true false = false    false false = false
|| Logical OR  (returns true if at least one is true)       true true = true    true false = true     false  false  = false
!  Logical NOT (negates a boolean  !true  // false   !false // true)

Combined 	
+= -= *= /= ++      a *= 2 count++
*/

39 + 1                 //40/
8 ** 2                 //square of 8 is 64/
42 < 20 && 42 < 35    // false - I am not the youngest person
42 < 20 || 42 < 35   // false - I am not younger than at least one other person




//----------------------------------------------------------------------------------------------------------------

/*class 2- 
Output values  & Variables
console.log("hello"); only visible to developers
*/

console.log("hello from javascript");
console.log("hello");
console.log(3*4+5);

/*
Variables 
(A pointer to some data or value.) allows computers to store & manipulate data dynamic (box)
variables are just containers which hold reusable data.

To write a variable we need:
let or var + space, =, the value we want, ;
Use use letters, numbers and underscore _ 
'camelCase': likesGermanFood (good practice)
1. Variable are case sensitive: name Name NAME are differente variables
2. Variable names should begin with a lowercase character.
3. Variable names cannot begin with a number.
4. Variable names cannot contain symbols.
Give descriptive name and boolean should be answer with yes or no ex. isMarried

Output, you need to write the variable first to be able to output it with console
let name = "Obi-Wan Kenobi";
console.log(name); // correct/

Variable Types:
var = Will be used in the whole program
let = WIll be used only on the scope where you declare it
const = Can never change

to escape a variable , eg 
const myString = 'Why doesn\'t this work';
console.log(myString) // => 'Why doesn't this work?'
\' => single quote
\" => double quote
\\ => backslash
\n => newline
\r => carriage return
\t => tab
\b => backspace
*/

let name = "Yadira";
let age = 39;
let city ="Bogota";
let speaksGerman = true;
name = "Yaya"
console.log("My name is " + name +  ", " + "I am " + age + " years old and " + "I am from " + city + ", " + speaksGerman + ", I can speak some German");
//My name is Yaya, I am 39 years old and I am from Bogota, true, I can speak some German/

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


//not true it returns 64 instead of 28
let degreesInFahrenheitTotal = degreesInFahrenheit_2 - 32 / 1.8; 

console.log("82 degrees Fahrenheit= " + (degreesInFahrenheit_2 - 32) / 1.8 + " degrees Celsius");
console.log(degreesInFahrenheitTotal); //first operation should in ()

//2 + 2 * 2 = 6
//(2 + 2) * 2 = 8


/*Template literals 
are a special type of string that make creating complex strings so much easier. 
Template literals are created by surrounding text between opening and closing backticks (``). 
Inside a template literal, you're able to refer to variables or execute code by using ${}. 
*/

console.log(`10 + 25 = ${10 + 25}`) // => "10 + 25 = 35"

const firstName2 = 'David';
const lastName2 = 'Bowie';
console.log(`My favorite artist is ${firstName2} ${lastName2}`) 
// => "My favorite artist is David Bowie"

let x = 3;
let y = 4;
const solution = (`The sum of ${x} and ${y} is ${x + y}`);
console.log(solution); 
// The sum of 3 and 4 is 7


/*Homework
online shop= 1 customer buys 2 hats (3.99€ each) and 3 t-shirts (9.99€ each), output the final cost.
*/

let hat = 3.99;
let tShirt = 9.99;
let customerShoppingCar = hat * 2 + tShirt * 3;
console.log("Homework 1: The total price is " + customerShoppingCar + "Euros");
// Homework 1: The total price is 37.95Euros

//Homework solution/
let hatPrice = 3.99;
let tShirtPrice = 9.99;

let hatAmount = 2;
let tShirtAmount = 3;

let totalHatPrice = hatAmount * hatPrice;
let totalTShirtPrice = tShirtAmount * tShirtPrice;

let totalCost = totalHatPrice + totalTShirtPrice;

console.log(totalCost);


//----------------------------------------------------------------------------------