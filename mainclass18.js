
/*
Write a function that takes customer data and returns a string consisting of:
"Dear [customer name], thanks for your purchase of a [product purchased] for the price of 
[product price]"
*/

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
function thankYou() {
  let message = "Dear " + customerDataSimple["name"] + ", thanks for your purchase of a " + customerDataSimple["productPurchased"] +
    " for the price of " + customerDataSimple["productPrice"];
  console.log(message);
}
thankYou();

// Option 2 using a parameter and calling the function
function thankYouWithParameter(data) {
  let messageWithParameter = "Dear " + data.name + ", thanks for your purchase of a " + data.productPurchased +
    " for the price of " + data.productPrice;
  return messageWithParameter;
}

console.log(thankYouWithParameter(customerDataSimple));
console.log(thankYouWithParameter(customerDataSimple2));


/* Exercise 2
Write a function that takes customer data and returns an array of strings each consisting of:
"Dear [customer name], thanks for your purchase of a [product purchased] for the price of [product price]"
*/
let customerDataMedium = [
  { name: "James", productPurchased: "phone", productPrice: "€200" },
  { name: "Carlos", productPurchased: "car", productPrice: "€20,000" },
  { name: "Sevtap", productPurchased: "Xbox", productPrice: "€400" },
];


//option 1 Usign Parameters and arguments and for loop
function composeEmails(data) {
  let emails = [];
  for (let i = 0; i < data.length; i++) {
    let email = "1_Dear " + data[i].name + ", thanks for your purchase of a " +
      data[i].productPurchased + " for the price of " + data[i].productPrice;
    emails.push(email);
  }
  return emails
}
console.log(composeEmails(customerDataMedium));

//option 2 Usign Parameters and arguments and FOR OF loop + a function with the first message with the first email
function composeSingleEmail(customer) {
  let email = "2_Dear " + customer.name + ", thanks for your purchase of a " +
  customer.productPurchased + " for the price of " + customer.productPrice;
  return email;
}

function composeEmails2(allCustomers) {
  let emails = [];
  for (let AnyWordHereEachObject of allCustomers) { //iterates each object on (data) which we will replace with customerDataMedium
    let email = composeSingleEmail(AnyWordHereEachObject); //to give each value of customerDataMedium we dont need [i]
    emails.push(email);
  }
  return emails
}
console.log(composeEmails2(customerDataMedium));//call the function and assign customerDataMedium as argument


//option 3 Simple not recommended
function composeEmails3() {
  let emails = [];
  for (let i = 0; i < customerDataMedium.length; i++) {
    let email = "3_Dear " + customerDataMedium[i].name + ", thanks for your purchase of a " +
      customerDataMedium[i].productPurchased + " for the price of " + customerDataMedium[i].productPrice;
    emails.push(email);
  }
  console.log(emails);
}
composeEmails3();


/*
{"number of total sales":19,"
total revenue":977,
"highest revenue among 3 months":{"month":"Jan","revenue":436},
"avg revenue per month":{"Jan":43.6,"Feb":59,"March":61}}
*/

//ANALYZE THIS SALES DATA (EASY)
//Write a function that accepts the following sales 
//data and returns number of sales and total revenue

let monthlySalesInEuroEasy = [12, 34, 25, 6, 54, 8, 98, 76, 45, 78];

function numberOfSales(itemsInTheArray) {
  let message = "number of sales is: ";
  message += itemsInTheArray.length; //give us the number of items inside the array

  let revenue = 0;
  for (sales of itemsInTheArray){
    revenue += sales;
  }
  //for (let i=0; i < itemsInTheArray.length; i++){
   // revenue += itemsInTheArray[i];
 //}
  message += " and the total revenue was: " + revenue;
  return message;
}

console.log("Exercise 2 = " + numberOfSales(monthlySalesInEuroEasy));



/*
ANALYZE THIS SALES DATA (MEDIUM)
Write a function that accepts the following sales data and returns total number of sales, 
total revenue, highest revenue in a single month and average revenue per month
*/

let quarterlySalesInEuro = {
  Jan: [12, 34, 25, 6, 54, 8, 98, 76, 45, 78],
  Feb: [54, 8, 98, 76],
  March: [8, 98, 76, 45, 78],
};

function totalOfsales(totalNumberofSalesAllMonths){
let message ="The total number of sales in this quarter was ";
let totalOfSalesQuarter = 0;
  for (let sales in totalNumberofSalesAllMonths){
    totalOfSalesQuarter += totalNumberofSalesAllMonths[sales].length; 
  }
  //let totalRevenue = 0;
 // for (sales in totalNumberofSalesAllMonths){
  //totalRevenue += totalNumberofSalesAllMonths[sales];
  //}

  message += totalOfSalesQuarter +" and the total revenue was ";
  return message;
}

function analyzeData(quarterlySales) {
  let totalRevenues = {
    Jan: 0,
    Feb: 0,
    March: 0,
  };
  for (let month in quarterlySales) {
    let numberOfSales = quarterlySales[month].length;
    let totalRevenue = 0;
    for (let sale of quarterlySales[month]) {
      totalRevenue += sale;
    }

    totalRevenues[month] = totalRevenue;

    console.log(
      "for " +month + " number of sales is : " + numberOfSales + 
      " and the total revenue was: " + totalRevenue);
  }

  let highestMonthName = "";
  let highestMonthRevenue = -1;
  for (let month in totalRevenues) {
    if (totalRevenues[month] > highestMonthRevenue) {
      highestMonthRevenue = totalRevenues[month];
      highestMonthName = month;
    }
  }

  console.log(
    "the highest Revenue in a single month was " + highestMonthName +
      " with " +highestMonthRevenue +"€");

  let totalRev = 0;

  for (let month in totalRevenues) {
    totalRev += totalRevenues[month];
  }
  let numberOfMonths = Object.keys(totalRevenues).length;

  let aveRev = totalRev / numberOfMonths;

  console.log("the average monthly revenue was: " + aveRev);
}

analyzeData(quarterlySalesInEuro);

//"The number of sales for " + month + "was " + 

console.log("Exercise 3 = " + totalOfsales(quarterlySalesInEuro));



//Write a function that takes cinema times and outputs the day that has the most times available

let cinemaTimes = {
  monday: [10, 13, 17, 22,],
  tuesday: [10, 13, 17, 22],
  wednesday: [13, 17, 22],
  thursday: [10, 17, 22],
  friday: [10, 13, 22],
  saturday: [10, 13, 14, 17, 22],
  sunday: [10, 13, 17, 19, 20, 22],
};

function cinemaMostAvailableDay(wholeWeek){ //will be taking the data from cinema times
  let dayWithHigherNumberOfTimes = ""; //output the NAME array with the most values inside
  let higherNumberOfTimes = 0;  //output the biggest LENGTH of all days 
  for(let day in wholeWeek){    //takes each day in the week
    let eachDayNumber = wholeWeek[day].length; //extracts the length of each day
    //console.log(eachDayNumber);
    if(eachDayNumber > higherNumberOfTimes){ //if the length is higher than 0
      dayWithHigherNumberOfTimes = day;     //put the "name" of the day here
      higherNumberOfTimes = eachDayNumber;  // put the length of the day here
    }
  } //the highest length will be printed and the name of the day
  
  let message = "the day with the most number of movies is " 
  + dayWithHigherNumberOfTimes + " with " + higherNumberOfTimes + " movies";
  
  return message;
  // return("the day with the most number of movies is " + dayWithHigherNumberOfTimes + " with " + higherNumberOfTimes + " movies");
}

console.log(cinemaMostAvailableDay(cinemaTimes));//pass inside the dat from cinema times



//teacher's solution:
/*
function cinemaMostAvailableDay2(cinemaTimes) {
  let numberOfMoviesPerDay = {
    monday: cinemaTimes.monday.length,
    tuesday: cinemaTimes.tuesday.length,
    wednesday: cinemaTimes.wednesday.length,
    thursday: cinemaTimes.thursday.length,
    friday: cinemaTimes.friday.length,
    saturday: cinemaTimes.saturday.length,
    sunday: cinemaTimes.sunday.length
  }

  let mostMoviesInADay = "";
  let mostMovies = 0;

   for(let day in numberOfMoviesPerDay){   
    if(numberOfMoviesPerDay[day] > mostMovies){ 
      mostMoviesInADay = day;     
      mostMovies = numberOfMoviesPerDay[day];  
    }
   }   
  let message = "the day with the most movies is " 
  + mostMoviesInADay + " with " + mostMovies;
  
  return message;
}

console.log(cinemaMostAvailableDay2(cinemaTimes))
*/


//Write a function that takes cinema times and a string containing the day
//of the week that returns the available movies on that day with session times.

let movieDisplayNames = {
  theRoom: "The Room",
  starWars: "Star Wars: Revenge of the Sith (Episode III)",
  marvel: "Avengers: Endgame",
};

let cinemaTimesMedium = {
  monday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  tuesday: { starWars: [15], marvel: [20, 23] },
  wednesday: { theRoom: [10, 13, 17, 22], marvel: [20, 23] },
  thursday: { theRoom: [10, 22], starWars: [15, 17] },
  friday: { theRoom: [10, 13, 17, 22], starWars: [15, 17], marvel: [20, 23] },
  saturday: { theRoom: [10, 13, 17, 22], starWars: [15, 17], marvel: [20, 23] },
  sunday: { theRoom: [10, 13, 17], starWars: [10, 15, 17, 23], marvel: [20, 23] }
};

function MoviesForToday(selectedDay){
  let message = "On " + selectedDay + " these movies are playing ";
  
  for(let movie in cinemaTimesMedium[selectedDay]){ //the day will be replaced in the console
    message += movieDisplayNames[movie] + " showing at "; //replace names of objects keys for the names in movieDisplayName
    for(let time in cinemaTimesMedium[selectedDay][movie]){//goes inside the movies of each day
      message += cinemaTimesMedium[selectedDay][movie][time] + ", "; //prints the times of each movie 
    }
  }
  return message;
}

console.log(MoviesForToday("monday"));







