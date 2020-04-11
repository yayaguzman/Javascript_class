

//----------------------------------------------------------------------------------------------
//Class 7 Arrays & Objects
//EXERCISE 1
let myFriends= ["Mile", "Mapi", "Jasmine"];
console.log("Hello" + " " + myFriends[0]);
console.log("Hello" + " " + myFriends[1]);
console.log("Hello" + " " + myFriends[2]);

//it is the same as
//EXERCISE 2
for (let i = 0; i < myFriends.length; i++) {
  let allFriends = myFriends[i];
  console.log("Hello" + " " + allFriends + "! :)");
}


let myFriends2 = ["Mile", "Mapi", "Jasmine"];
myFriends2.forEach(element => console.log("hello" + " " + element + "!"));


let friends = ["Alice", "Bob", "Carol"];
console.log(friends.length); // 3

//lenght the number of items inside an array


/*
Appending new values
We can append new values to an array using .push():

let friends = ["Alice", "Bob", "Carol"];
console.log(friends.length); // 3

friends.push("David");

console.log(friends.length); // 4
console.log(friends[3]); // David

*/

// EXERCISE 3

/*Exercise 3
Create an array containing a few numbers, ex [3, 2, 9, 5, 6]

Output the last element of your array
Output the sum of all the numbers in the array
Output the largest number of the array
Output the average (mean) of all numbers (sum of all numbers divided by amount of numbers)
*/

//let myNumbers=[6, 2, 9, 5, 8, 10];
//console.log("first " + myNumbers.length - 1);

/*
Create a new array containing only numbers of the original array that are smaller than 5
ex: given input [1, 3, 7, 2, 9, 5], return [1, 3, 2]
Write a function that takes a number and an array of numbers as input parameter. Return the index of the number if it is in the array, otherwise return -1
ex: given inputs 5 and [2, 1, 5, 6, 3], return 2
*/



let myNumbers = [8, 2, 9, 1]; //sum = 20
let sum= 0; //container to add all the numbers to it

for (let i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i];
}
console.log(sum);


/*

You have written a program that tells you how likely it is to rain outside (in percent %).
Unfortunately, it is not very accurate, it sometimes gives you more than 100% or less that 0%.
These are the values you got:
[55.1, 45.6, 145.01, 10, -0.5, 0.001, 110, -0.001]
*/

let weather = [55.1, 45.6, 145.01, 10, -0.5, 0.001, 110, -0.001];

for (i = 0; i< weather.length; i++) {
  if (weather[i] < 0){
    weather[i] = 0;
  }
  if (weather[i] > 100){
    weather[i] = 100;
  }
}
console.log(weather); //(8) [55.1, 45.6, 100, 10, 0, 0.001, 100, 0]




let names = ["Maria", "Julien", "Simon"];
let ages = [54, 27, 66];

function introduce(name, age) {
  console.log("my name is "  + name + " I'm " + age + " years old");
}

for (let i = 0; i < names.length; i++) {
  introduce(names[i], ages[i]);
}
//let introduce = [[Maria, 23],[Juan, 25],[Luis, 26]];


let mothers = ["Ana", "Lana", "Luli"];
let theirKids = [1, 2, 4];
let kidsPlural = "children";


function numberOfKids(motherNames, kids){
  console.log("my name is " + motherNames + " " + "and I have " + kids + " " + kidsPlural);
}

for(let i=0; i< theirKids.length; i++){
  numberOfKids(mothers[i], theirKids[i]);
  if (theirKids[i].valueOf === 1) {
   kidsPlural = "children";
  }
  
}
