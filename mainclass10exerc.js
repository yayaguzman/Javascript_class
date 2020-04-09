//Class 10 Exercises

function mySubmit() {
    let names = document.getElementById("form1");
    for (var i = 0; i < names.length; i++) {
         console.log(names[i].value);
    }
}




/*<form id="form1" onsubmit="getFormvalue()"> 
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










