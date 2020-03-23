//Class 6 = LOOPS

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

  for (let countDownBack=10; countDownBack > 0; countDownBack--) {
    console.log(countDownBack);
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
*/


/* Homework:
This is a real interview question for a Junior JavaScript developer:

Print all the numbers from 1 to 100 to console
If the number is divisible by 3, print “Fizz” instead
If the number is divisible by 5 (and not by 3), print “Buzz” instead
If the number is divisible by both 3 and 5, print “FizzBuzz” instead
*/

//let fizz="Fizz";
for (var fizz = 1; fizz<100; fizz++) {
  if (fizz%3 === 0) {
    console.log("Fizz");
  }
  else if (fizz%5 === 0){
    console.log("FizzBuzz")
  }

}

/*
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
*/