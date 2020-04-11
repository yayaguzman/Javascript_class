
/*
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

Class 5 = JAVASCRIPT + HTML

1. Create a new folder
2. Create a html file index.html:
3. Create a JS file main.js:
console.log("Hello from JavaScript");

ex:
html:
<button onclick="onButtonClick()">

js
function onButtonClick() {
    console.log("Button has been clicked!");
}

*/


function greeting(name) {
  let output = "Hello " + name;
  console.log(output) //Should be inside the fuction otherwise would be error
}

greeting("World"); // We should call the function an give value to the parameter "name"

/*Alternative
function greeting(name) {
  return "Hello " + name;
}

let output = greeting("World");
console.log(output)
*/


//call on a function from an html file that change bg color with a button
/*
function changeColor_part1(color) {
  document.body.style.backgroundColor = color;
}
*/

// PART 1 - this is the easy part without bonus
function changeColor_part1(color) {
  document.body.style.backgroundColor = color;
}

// BONUS 1
function changeColor(color) {
  let newColor;
  if (document.body.style.backgroundColor === color) {
    newColor = "light" + color;
  } else {
    newColor = color;
  }

  // apparently, there's no lightred in html
  if (newColor === "lightred") {
    newColor = "pink";
  }

  document.body.style.backgroundColor = newColor;
}

// BONUS 2
function darkColor() {
    let color = document.body.style.backgroundColor;
    if (color === "red" || color === "pink") {
        document.body.style.backgroundColor = "darkred";
    } else if (color === "green" || color === "lightgreen") {
        document.body.style.backgroundColor = "darkgreen";
    } else if (color === "blue" || color === "lightblue") {
        document.body.style.backgroundColor = "darkblue";
    }
}

