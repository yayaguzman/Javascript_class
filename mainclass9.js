

/*
Class 9 - DOM & String Methods -------

JavaScript methods are actions that can be performed on objects
Two common string methods are toUpperCase and toLowerCase

let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"
let upper = favAlbum.toUpperCase();
console.log(upper);
*/

//'THE RISE AND FALL OF ZIGGY STARDUST AND THE SPIDERS FROM MARS'


/*Operators	
Logical 	
|| && !	            a && !b     x >= 5 && x < 15 only used with Boolean
&& Logical AND (returns true if both booleans are true)     true true = true    true false = false    false false = false
|| Logical OR  (returns true if at least one is true)       true true = true    true false = true     false  false  = false
!  Logical NOT (negates a boolean  !true  // false   !false // true)

Exercise
Implement the following function:

function isInRange(value, range) { YOUR CODE HERE }

isInRange(4, { min: 0, max: 5 }) // should return true
isInRange(4, { min: 4, max: 5 }) // should return true
isInRange(4, { min: 6, max: 10 }) // should return false
isInRange(5, { min: 5, max: 5 }) // should return true
*/

//SOLUTION 1
function isInRange(value, range) {
	return value >= range.min && value <= range.max;
}

//SOLUTION 2
function isInRange(value, range) {
    if (value < range.min) {
        return false;
    }
    if (value > range.max) {
        return false;
    }
    return true;
}


//Nesting Objects
let person = {
    name: "John",
    address: {
        street: "Am Nordbahnhof",
        city: "Berlin"
    }
}

// how do we access the person's city? person.address.city

//DOM

/*
API
API stands for Application Programming Interface
An API is a set of definitions and protocols for building and integrating application software.
It's a contract between two parties, for example between the developer and the browser

DOM
DOM stands for Document Object Model
DOM is a programming API for HTML documents
It defines the logical structure of documents and the way a document is accessed and manipulated

How to use DOM
document is a variable provided by browser for us
The type of document is object.

document.body.style.backgroundColor 
is a property pointing to the backgroundColor of the style of the body of the document.

HTML
<input type="text" value="hello" id="myInput" />   We access by its ID

JS
let input = document.getElementById("myInput");
console.log(input.value);  // prints "hello"


Exercise - DOM manipulation
Create an empty HTML file, add an <input> element and give it an id attribute
Create a JavaScript file. Use document.getElementById() to get your input element
Look at the properties of the HTML Input: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
Try to set / get a few

let input = document.getElementById("myInput");
console.log(input.value);  // prints "hello"

input.value = "hola";
input.size = 300;
input.style.backgroundColor = "#1782FF";
*/





function myButton() {
    let theInput = document.getElementById("myText");
    console.log(theInput.value);
    document.body.style.backgroundColor = color;
  }



   /* Add a function to your JavaScript file
In the onclick attribute of your <button>, call that function
Inside your function, get the value attribute from your input
Set the background color of the <div> to the value of your input

*/


    //<input type="text" value="hi" id="myText" />
        //<button onclick="myButton()"> Click me</button>
        //<div id="myDiv">   </div>




