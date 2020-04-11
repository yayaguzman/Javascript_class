

//----------------------------------------------------------------------------------------------
//Class 8 Objects

//Objects --------------------------

let me = {
  name: "Lucy",
  age: 34,
  hairColor: "red",
  eyeColor: "green"
};
console.log(me);


// use objects instead of these arrays
// ['John Carmack', 'Frances Northcutt', 'John Nash'];
// [23, 25, 66];

// don't forget to loop over the objects and introduce everyone.

let john = {
  name: "John",
  lastName: "Carmack",
  age: 23
};

let frances = {
  name: "Frances",
  lastName: "Northcutt",
  age: 25
};

let nash = {
  name: "john",
  lastName: "Nash",
  age: 66
};

function introduceMe(namess, lastnamess, agess){
  console.log("Hello, my name is " + namess + " " + lastnamess + " " + "I'm " + agess + " years old");
}

for(let i=0; i<john.length; i++){
  introduceMe(john.name, john.lastName, john.age);
}



let people = {
  name: "John",
  lastName: "Carmack",
  age: 23
};

let cat = {
  name: "Pepe",
  hobbies: {one:"sleeping", two:"eating", three:"playing"},
  friends: ["Yin", "Yan", "Yun"],
  favoriteFood: "carrots",
  age: 3,
  color: "white"
};
console.log(cat);



/*
How to call properties in Objects
var foo = {
  name: 'kitten',
  lastName:'Chou'}
foo.name; // kitten
foo['name']; // kitten

console.log(foo.name);
var get = 'name';
foo[get]; // kitten

foo.1234; // SyntaxError
foo['1234']; // ¡funciona!

*/

/*

let arr = [1, 3, 7, 2, 9, 5];
for (i = 0; i< 6; i++) {  //same 3 parts in () and separated by ;
  console.log(arr);
}

OPERATORS
Numerical + - * /
Comparison === strict equality  !== strict inequality  < > <= >= greater / less or equal
Logical || or  && and ! not
Combined 	+= -= *= /= ++   
&&

Operator ++ and -- increase (or decrease) the value of a variable by 1


*/
