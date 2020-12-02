var readlineSync = require('readline-sync');

const chalk = require('chalk');

var userName = readlineSync.question("What's your name? ");

console.log(chalk.bgBlack("Hello ! " + userName +" How well do u know me?\n"));
var score = 0;

var userStart = readlineSync.question("Are you ready? Y/N \n");
if (userStart === "Y" || userStart === "y") {
  console.log("Abhi Maza Aayega Na Bhidu !\n\n")
} else {
  console.log("Khatam Tata Bye Bye !\n\n")
  process.exit(0);
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("------------------------------")
}


var questions = [{
  question: "1. Well do you know my name?\n  \n",
  answer: "shriyansh"
}, {
  question: "2. Which City I Am From?\n  \n",
  answer: "guna"
},{
  question: "3. What is my favourite no.?\n\n",
  answer: "9"
},{
  question: "4. I prefer Green Tea or Coffee?\n\n",
  answer: "Tea"
},{
  question: "5. Whom do I admire the most? \n\n",
  answer: "Tanay pratap"
},{
  question: "6.  Who is my favorite actor ?\n \n",
  answer: "Pankaj Tripathi"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

process.exit(0);
