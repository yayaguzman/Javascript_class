

//DOM

/*
Let's write a number guessing game!
Choose a secret number between 1 and 100
Add an <input> where the user can enter a number between 1 and 100
Add a button "guess"
Output to a <div> element whether the guessed number is smaller, 
larger or equal to the secret number
*/


let myNumber = 56;
let yourNumberInput = document.getElementById("yourNumber");
let showMeResult = document.getElementById("result"); //div

function guessNumber() {
    let yourGuess = parseInt(yourNumberInput.value);
//yourGuess = parseInt(yourGuess); 
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
    
    
}

let resultEl = document.createElement("li");
    resultEl.textContent = showMeResult;
    let listPrevious = document.getElementById("previous"); //list
    listPrevious.appendChild(resultEl);



/* 
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




