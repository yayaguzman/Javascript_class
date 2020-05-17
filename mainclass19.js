/*The function you must write will accept 2 inputs;

Imagine you are designing an app to track the storage in your Pizza and Pasta Restaurant.
the new order the current kitchen storage
The output of the function should return the updated kitchen storage.
*/

let initialKitchenStorage = {
  flourInGrams: 10000,
  eggs: 48,
  tomatoSauceInMl: 2000,
  beefInGrams: 10000,
  mixedHerbsInGrams: 2000,
  cheeseInGrams: 10000,
};

let recipes = {
  pizza: {
    flourInGrams: 200,
    tomatoSauceInMl: 100,
    mixedHerbsInGrams: 20,
    cheeseInGrams: 100,
  },

  pasta: {
    flourInGrams: 100,
    eggs: 1,
    tomatoSauceInMl: 100,
    beefInGrams: 100,
    mixedHerbsInGrams: 20,
    cheeseInGrams: 25,
  },


  let currentKitchenStorage = initialKitchenStorage;

function itemOrder(order, kitchenStorage) {
  let singleItem = 0;
  for(item in order){

  }
  console.log(itemOrder(recipes, initialKitchenStorage));
  

}

currentKitchenStorage = itemOrder("pizza", currentKitchenStorage);

console.log(currentKitchenStorage);










/*
Write a function that takes customer data and returns a string consisting of:
"Dear [customer name], thanks for your purchase of a [product purchased] for the price of 
[product price]"

let customerDataSimple = {
  name: "Simon",
  productPurchased: "guitar",
  productPrice: "€100",
};
let customerDataSimple2 = {
  name: "Sol",
  productPurchased: "Toy",
  productPrice: "€10",
};

//option 1
function thankYou(){
  let message = "Dear " + customerDataSimple.name + ", thanks for your purchase of a " + customerDataSimple.productPurchased + 
  " for the price of " + customerDataSimple.productPrice;
  console.log(message);
}
thankYou();

  // Option 2 using a parameter and calling the function
  function thankYouWithParameter(data){
    let messageWithParameter = "Dear " + data.name + ", thanks for your purchase of a " + data.productPurchased + 
    " for the price of " + data.productPrice;
    return messageWithParameter;
  }

  console.log(thankYouWithParameter(customerDataSimple));
  console.log(thankYouWithParameter(customerDataSimple2));


  let customerDataMedium = [
    { name: "James", productPurchased: "phone", productPrice: "€200" },
    { name: "Carlos", productPurchased: "car", productPrice: "€20,000" },
    { name: "Sevtap", productPurchased: "Xbox", productPrice: "€400" },
  ];


//option 1 Usign Parameters and arguments and for loop
 function composeEmails(data){
  let emails = [];
  for(let i = 0; i < data.length; i++){
    let email = "1_Dear " + data[i].name + ", thanks for your purchase of a " + 
                data[i].productPurchased + " for the price of " + data[i].productPrice;
    emails.push(email);
  }
  return emails
}
console.log(composeEmails(customerDataMedium));

//option 2 Usign Parameters and arguments and FOR OF loop + a function with the first message with the first email
function composeSingleEmail(data){
let email = "2_Dear " + data.name + ", thanks for your purchase of a " + 
data.productPurchased + " for the price of " + data.productPrice;
return email;
}

function composeEmails2(data){
  let emails = [];
  for(let AnyWordHere of data){ //iterates each object on (data) which we will replace with customerDataMedium
   let email = composeSingleEmail(AnyWordHere); //to give each value of customerDataMedium we dont need [i]
    emails.push(email);
  }
  return emails
}
console.log(composeEmails2(customerDataMedium));//call the function and assign customerDataMedium as argument


//option 3 Simple not recommended
function composeEmails3(){
  let emails = [];
  for(let i = 0; i < customerDataMedium.length; i++){
    let email = "3_Dear " + customerDataMedium[i].name + ", thanks for your purchase of a " + 
    customerDataMedium[i].productPurchased + " for the price of " + customerDataMedium[i].productPrice;
    emails.push(email);
  }
  console.log(emails);
}
composeEmails3();

*/