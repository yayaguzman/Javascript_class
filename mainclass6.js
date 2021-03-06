//Class 6 = LOOPS

/*< - Less than
> - Greater than
<= - Less than or equal to
>= - Greater than or equal to
== - Is loosely equal to
=== - Is strictly equal to
!= - Is not loosely equal to
!== - Is not strictly equal to
*/

//loose equality (==). This operator is used to compare if 2 values have the same value, even if they aren't necessarily the same type.

 1   ==  1        // true
"1"  ==  1        // true
 1   == '1'       // true

true == true      // true
true == 'true'    // false

//For 2 values to be strictly equal (===) to each other, they need to not only have the same value, but also must have the same data type:

 2   ===  2        // true
"2"  ===  2        // false
 2   === '2'       // false

true === true      // true
true === 'true'    // false

/*WHILE LOOP
repeats its body while its condition is true:

while (condition) {
  // body is executed while "condition" is true
  console.log("Hello from while loop");
}
Example:

while (isHungry) {
  eat();
}
While isHungry is true, the function eat is called. needs to be incremented otherwise will loop forever

the answer if forever 0, it keeps on executing 0, until you run out of battery
    let i=0;
    while(i<2){
        console.log(i);
    }

*/

//QUIZZ 1

let i = 1;          // initialize i with 1
while (i < 6) {     // repeat this loop until we reach 6
  console.log(i);
  i++;              // increment i at every step
}
// will print 12345 in differents lines

  //EXERCISE 1 print your name 5 times in the console
  let number = 0;
  while(number < 5) {
      console.log("Yadira");
      number++;
  }

//EXERCISE 2 Output the squares of the first 10 numbers (1, 4, 9, 16, ...)
let numbers=1;
  while(numbers < 11) {
      console.log(numbers*numbers);
      numbers++;
  }

//EXERCISE 3 Output the sum  of the first 10 numbers (1, 4, 9, 16, ...)
let numbersum=1;
  while (numbersum < 11) {
      console.log(numbersum+numbersum);
      numbersum++;
  }

//what does it print?
  let m = 10;
  while (m < 15) {
    console.log(m);
    m++;
  }
  //it prints 10 11 12 13 14 


  //LOOP FOR
/*
  let i = 1;          // part 1 - initialize the counter / will run one time at the start of the loop
  while (i < 6) {     // part 2 - the exit condition // will loop as long as this is true
    console.log(i);   // part 3 - update the counter // will do this end of at every cycle
  }
    i++;    
    */

  // same code with for loop:

for (let o = 1; o < 6; o++) {  //same 3 parts in () and separated by ;
  console.log(o);
}

  //EXERCISE 1= Draw a pyramid to console:

  let star="*";
  for (pyramid = 1; pyramid < 6; pyramid++) {
      console.log(star += "*");
  }

 //EXERCISE 2= Count down from 10 to 0 and output it on console:

 for (let countDown=0; countDown < 11; countDown++) {
   console.log(countDown);
 }
 
  //EXERCISE 2= Count down from 10 to 0 and output it on console: backwards

  for (let i=10; i > 0; i--) {
    console.log(i);
  }


/*
Array list of items 
let myList= ["apples", "oranges", "bananas"]; 
needs square brackets 
arrays can have strings, numbers, functions even other arrays.

A WHILE loop executes its body while the condition is true.
We use a while loop if we don't know how many times the loop will be executed.
while (passwordIsWrong) { askForPassword(); }

A FOR loop first runs the init part, checks the condition part and if it is true, 
executes the body. After every loop, it executes the update part.

We use a for loop if we know in advance how often it will be executed.
for (let i = 0; i < 1000; i++) { console.log(i); }

Numbers - Exponents & Remainders
Two other really useful arithmetic operators are:
exponentiation operator (**) 
and the modulus (remainder) operator (%).
The exponentiation operator (**) raises the first number to the power of the second number.
The modulus (remainder) operator (%) returns the remainder of dividing the first number by the second number.

*/
//2 ** 3 = 8
//2 ** 4 = 16
//4 % 3 = 1 // 3 goes into 4 one then remainer of 1
//4 % 5 = 4 // 5 is larger than 4, so technically it can't go into 4 at all, so the remainder would be 4.
const fiveSquared = 5 ** 2; // 25
const eightCubed = 8 ** 3; // 512
const sevenToTheSixth = 7 ** 6; // 117649
const eightyThreeModSix = 83 % 6; // 5
const sixtyModNine = 60 % 9; // 9 goes 6 times into 60 and the reminder is 6


//Inrementor & decrementor
let num = 10;

num++
console.log(num) // => 11

let numM = 10;

numM--
console.log(numM) // => 9


/* asigment operator   
+= - addition
-= - subtraction
*= - multiplication
/= - division 
*/

let num5 = 5;

num5 += 10 //same as: num = num + 10
console.log(num5) // => 15  



/* Homework:
This is a real interview question for a Junior JavaScript developer:

Print all the numbers from 1 to 100 to console
If the number is divisible by 3, print “Fizz” instead
If the number is divisible by 5 (and not by 3), print “Buzz” instead
If the number is divisible by both 3 and 5, print “FizzBuzz” instead
*/

//let fizz="Fizz";
for (let fizz = 1; fizz<101; fizz++) {
  if (fizz%5 === 0 && fizz%3 === 0) {
    console.log("FizzBuzz");
  }
  else if (fizz%3 === 0) {
    console.log("Fizz")
  }
  else if (fizz%5 === 0) {
    console.log("Buzz")
  }
  else {
    console.log(fizz)
  }
}

