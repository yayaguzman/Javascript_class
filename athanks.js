
//thank you so much for teaching us heart  you guys are amazing :)

function changeBg() {
    document.body.style.backgroundColor = "#1782FF";
}

let showMeThanks = document.getElementById("thanks")

function thankU() {
    for (i = 0; i < 4; i++) {
        showMeThanks.textContent += "+ + + 👏 Thank you + + + ";
    }
}

let showSoMuch = document.getElementById("foryour")

function soMuch() {
    showSoMuch.textContent = " - - - 🤓 so much 🤓 - - -";
}





function forYour() {
    let showMeCool = document.getElementById("cool")
    let nice = ['for your dedication', ' time', ' and cool classes 😍'];
    for (let i= 0; i < nice.length; i++){
        showMeCool.textContent = nice;
        }
   
    console.log("you guys are amazing :)")
}



/*
function forYour() {
    for (let i= 0; i < nice.length; i++){
    message.push(nice[i]);
    }

    for (let i= 0; i < message.length; i++){
        showMeCool.textContent = message;
     
}
*/

