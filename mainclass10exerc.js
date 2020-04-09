//Class 10 Exercises
/*
function mySubmit() {
    event.preventDefault();
    let names = document.getElementById("form1");
    for (let i = 0; i < names.length; i++) {
         console.log(names[i].value);
    }
}
*/

function mySubmit() {
    event.preventDefault();
    let form = document.getElementsByTagName("body")[0];
    let getInput = form.getElementsByTagName("input");
    //first input
    let i1= getInput[0];
    //second input
    let i2= getInput[1];
    console.log(i1.value + " " + i2.value);
}









/*

//Here is a sample html file with a submit button. Write a JavaScript function 
//to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

function getAttributes() {
    let allValues = document.getElementsById("w3r").getAttribute("href");
    console.log(allValues);
}

<p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self"
href="http://www.w3resource.com/">w3resource</a></p>
<button onclick="getAttributes()">Click here to get attributes value</button>


<form id="form1" onsubmit="getFormvalue()"> 
First name: <input type="text" name="fname" value="David"><br> 
Last name: <input type="text" name="lname" value="Beckham"><br> 
<input type="submit" val
 

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
    itemEl.onclick = function () {
        console.log(color);
        divEl.style.backgroundColor = color;
    }

    let listEl = document.getElementById("myList");
    listEl.appendChild(itemEl);

}
*/










