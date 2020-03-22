
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


/* the answer if forever 0, it keeps on executing
    let i=0;
    while(i<2){
        console.log(i);
    }
*/

//5 is the good answer


/*
let i=1;
while(i<6){
    console.log(i);
    i++;
}
  */

  let number=1;
  while(number<6){
      console.log("Yadira");
      number++;
  }


let numbers=1;
  while(numbers<11){
      console.log(numbers*numbers);
      numbers++;
  }


  let star="*";
  for(pyramid = 0; pyramid < 6; pyramid++) {
      console.log(star += "*");
  }


  /*

  let star="*";
  let pyramid;
  for(pyramid = 1; pyramid < 6; pyramid++) {
      console.log(star + pyramid);
  }
  */





/*var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

//for (let i = 0; i < 1000; i++) { console.log(i); }
  


 */