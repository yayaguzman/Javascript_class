//Class 10 Exercises
/*
Write a JavaScript function to get the values of First and Last name of the following form.
<form id="form1" onsubmit="getFormvalue()"> 
First name: <input type="text" name="fname" value="David"><br> 
Last name: <input type="text" name="lname" value="Beckham"><br> 
<input type="submit" value="Submit"> 
</form> 
*/

/* OPTION ONe SUGGESTED ON A WEBSITE
function mySubmit() {
    event.preventDefault();
    let names = document.getElementById("form1");
    for (let i = 0; i < names.length; i++) {
         console.log(names[i].value);
    }
}
*/

// MY SOLUTION
function mySubmit() {
    event.preventDefault();
    let form = document.getElementsByTagName("body")[0];
    let getInput = form.getElementsByTagName("input");
    //first input
    let i1 = getInput[0];
    //second input
    let i2 = getInput[1];
    console.log(i1.value + " " + i2.value);
} //David Be..

// Another solution













