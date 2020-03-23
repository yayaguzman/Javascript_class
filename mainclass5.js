
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


/*call on a function from an html file
function myBtnChangeColor_1() {
    document.body.style.backgroundColor = "white";
}

function myButtonR(l) {
    if(l.document.body.style.backgroundColor = "red")
    {
        l.document.body.style.backgroundColor = "pink";
    }else{
        l.document.body.style.backgroundColor = "white";
    }
    return false;
}

function myButtonG() {
    document.body.style.backgroundColor = "green";
}

function myButtonB() {
    document.body.style.backgroundColor = "blue";
}
*/


// teacher example
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
        document.body.style.backgroundColor = "darkgreen";
      }
    }



    /* Homework:
This is a real interview question for a Junior JavaScript developer:

Print all the numbers from 1 to 100 to console
If the number is divisible by 3, print “Fizz” instead
If the number is divisible by 5 (and not by 3), print “Buzz” instead
If the number is divisible by both 3 and 5, print “FizzBuzz” instead
*/
