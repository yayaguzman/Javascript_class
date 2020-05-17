
//API JSON Class 14
/*
async function fetchDog() {
  let response = await fetch("https://dog.ceo/api/breeds flag/random");
  let result = await response.json();
  let flag = document.createElement("img");
  flag.src = result.message;
  document.body.appendChild flag);
}
fetchDog();

*/
//Create a <img> element, set its src attribute to the 
//message you got from dog.ceo and append it to document.body!

// HOMEWORK

function showMeData(printIt){

  let flag = document.createElement("img");
  flag.src = printIt.flag;
  flag.width = 200; // added by teacher to limit the size
  document.body.appendChild(flag);

  let createName = document.createElement("li");
  createName.textContent = "Name: " + printIt.name;
  document.body.appendChild(createName);

  let createCapital = document.createElement("li");
  createCapital.textContent = "Capital: " + printIt.capital;
  document.body.appendChild(createCapital);

  let createPopulation = document.createElement("li");
  createPopulation.textContent = "Population: " + printIt.population;
  document.body.appendChild(createPopulation);

  let mybr = document.createElement("br");
  document.body.appendChild(mybr);
}



async function fetchCountries(nameCountry) {
  let url = "https://restcountries.eu/rest/v2/name/" + nameCountry;
  let response = await fetch(url);
  let result = await response.json();

  for(let i = 0; i < result.length; i++){
    let countryData = result[i]; 
    showMeData(countryData) ;
    // also  showMeData(result[i]);
    //result = result[i]; never do this!!!
  }
}



let readInput = document.getElementById("typeCountry");

function clickTheButton() {
  fetchCountries(readInput.value);
}

  //document.body.innerHTML = "<b> hello </b>"; prinst with bold style
  //textcontent doesnt take styles
  //dont use if you dont trust the sender of the html

