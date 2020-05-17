
//API JSON Class 15
// 
async function fetchQuiz() {
   // connects to quiz page
  let response = await fetch("https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple");
  let result = await response.json();
//I go through the questions in the array
 
 let questionsArray = result.results; 
  for(let i = 0; i < questionsArray.length; i++){
  console.log(questionsArray[i]);
  }
}
  fetchQuiz();
