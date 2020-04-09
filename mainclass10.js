

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
    let inputEl = document.getElementById("myText");
    console.log("Give me color baby!!!");
    let color = inputEl.value;  //value is what it is inside the input field
    let divEl = document.getElementById("myDiv");
    divEl.textContent = color;
    divEl.style.backgroundColor = color;
    inputEl.value = "";  //This remove the value

    let itemEl = document.createElement("li");
    itemEl.textContent = color;
    itemEl.style.backgroundColor = color;
    itemEl.onclick = function(){
        console.log(color);
        divEl.style.backgroundColor = color;
    }

    let listEl = document.getElementById("myList");
    listEl.appendChild(itemEl);
   
  }



   /* Add a function to your JavaScript file
In the onclick attribute of your <button>, call that function
Inside your function, get the value attribute from your input
Set the background color of the <div> to the value of your input

 <input type="text" value="hi" id="myText" />
    <button onclick="myButton()"> Click me</button>
    <div id="myDiv"> My div </div>
*/


    //<input type="text" value="hi" id="myText" />
        //<button onclick="myButton()"> Click me</button>
        //<div id="myDiv">   </div>




