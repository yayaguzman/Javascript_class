
//DOM

/*
Let's write a number guessing game!
Choose a secret number between 1 and 100
Add an <input> where the user can enter a number between 1 and 100
Add a button "guess"
Output to a <div> element whether the guessed number is smaller, 
larger or equal to the secret number
*/

let myNumber = 56; // right number
let yourNumberInput = document.getElementById("yourNumber");  //user's number
let showMeResult = document.getElementById("result"); //div

function guessNumber() {
    let yourGuess = parseInt(yourNumberInput.value); ////value is the number inside the input field
//yourGuess = parseInt(yourGuess) converts the input text into a number;&#x2029;
    if (yourGuess === myNumber) {
        showMeResult.textContent ="You Woooooooonnnnn!!! :)";
    // console.log("You Woooooooonnnnn!!! :)");
    } else if (yourGuess > 0 && yourGuess < myNumber) {
        showMeResult.textContent = "The number is smaller, try again!";
     //console.log("The number is smaller, try again!");
    } else if (yourGuess > myNumber && yourGuess < 100) {
        showMeResult.textContent = "The number is bigger, try again!";
    //console.log("The number is bigger, try again!");
    } else {
        showMeResult.textContent = "Your number should be between 0 and 100, no cheating pls :)";
    //console.log("Your number should be between 0 and 100, no cheating pls :)")
    } 

    let eachGuess = document.createElement("li"); //create each element of the list
    function printTry(){ //prints the message + number in the input
        if (yourGuess === myNumber){
            eachGuess.textContent = ("Correct! " + yourGuess);
        } else{
            eachGuess.textContent = ("nope! " + yourGuess);
        } 
    }
    printTry(); //Calling the fuction thet prints the number in the input
      

    let listPrevious = document.getElementById("previous"); //list ID
    //this means add eachGuess as a child of listElement
    listPrevious.appendChild(eachGuess);

} 
    
    //prints the number in the input + message
    /*function printTry(){
        if (yourGuess === myNumber){
            textContent = ("Yes!" + yourGuess);
        } else{
            textContent = ("nope! " + yourGuess);
        } 
    }
    printTry();
    let listPrevious = document.getElementById("previous"); //list ID
    //this means add eachGuess as a child of listElement
    listPrevious.appendChild(eachGuess);

/* 

let eachGuess = document.createElement("li"); //create each element of the list
function print(){
    if (yourGuess === myNumber){
        eachGuess.textContent = ("Yes!" + yourGuess);
    } else{
        eachGuess.textContent = ("nope! " + yourGuess);
    } 
}


let listPrevious = document.getElementById("previous"); //list
    listPrevious.appendChild(resultEl);
 let resultEl = document.createElement("li");
    resultEl.textContent = showMeResult;

Add a function to your JavaScript file


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




