//Class 10 Exercises

function set_background() {
    let docBody = document.getElementsByTagName("body")[0];
    let myBodyEl = docBody.getElementsByTagName("p");
    //first p
    let p1= myBodyEl[0];
    p1.style.background = "CornflowerBlue";
    //second p
    let p2= myBodyEl[1];
    p2.style.background = "LightPink";
}
console.log("hola");




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










