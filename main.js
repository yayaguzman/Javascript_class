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

let name= "Yadira";
let age= 39;
let city="Bogota";
let speaksGerman= true;
console.log("My name is " + name +  ", " + "I am " + age + " years old and " + "I am from " + city + ", " + speaksGerman + ", I can speak some German");
//My name is Yadira, I am 39 years old and I am from Bogota, true, I can speak some German/

let firstName= "Yadira";
let lastName= "Guzman";
let fullName= firstName + " " + lastName; //Variables can also result from other variables/

console.log("My full name is " + fullName); //My full name is Yadira Guzman/

//Exercise/
let degreesInCelsius= 28;
// let degreesInFahrenheit= ???; Fahrenheit = Celsius multiplied by 1.8 plus 32
let degreesInFahrenheit= degreesInCelsius * 1.8 + 32; 
console.log("28 degrees Celsius= " + degreesInFahrenheit + " degrees Fahrenheit");

let degreesInFahrenheit_2= 82.4;
let convertFahrenheitToCelsius_1= degreesInFahrenheit_2 - 32;
let convertFahrenheitToCelsius_2= convertFahrenheitToCelsius_1 / 1.8;
console.log("82 degrees Fahrenheit= " + convertFahrenheitToCelsius_2 + " degrees Celsius");

/*Homework
online shop= 1 customer buys 2 hats (3.99€ each) and 3 t-shirts (9.99€ each), output the final cost.
*/

let hat= 3.99;
let tShirt= 9.99;
let customerShoppingCar= hat * 2 + tShirt * 3;
console.log("Homework 1= The total price is " + customerShoppingCar + "Euros");

//Homework solution/
let hatPrice = 3.99;
let tShirtPrice = 9.99;

let hatAmount = 2;
let tShirtAmount = 3;

let totalHatPrice = hatAmount * hatPrice;
let totalTShirtPrice = tShirtAmount * tShirtPrice;

let totalCost = totalHatPrice + totalTShirtPrice;

console.log(totalCost);

/*class 3- 
Output values
console.log("hello"); only visible to developers
*/

