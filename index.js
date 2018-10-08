// all the requiered files and npm's 
var prompt = require("prompt");
var inquirer = require("inquirer");
var fs = require("fs");
var word = require("./word");
var letter = require("./letter");

// the words that the user will guess from in an array. they are in uppercase so because the Letter constructor converts all user inputs to uppercase
// the compGuess is a random word taken from wordGuessArray
var wordGuessArray = ["SNOWBOARD", "AUTOMOBILE", "CANINE", "COMPUTER", "PROGRAMMING", "GUITAR", "ASYNCRANOUS"];
var compGuess = wordGuessArray[Math.floor(Math.random() * wordGuessArray.length)];

// if the user guesses a wrong character
var userWrongCount = 0;

// will have the users inputs pushed to it so 
var userCharGuessArray = [];

// the for loop for displaying the users guesses... may not be of use but it exists for now... maybe use in word.js Word constructor
for (x = 0; x < userCharGuessArray.length; x++){
    return userCharGuessArray[x];
}

var userInterface = function() {
  
  if (userWrongCount < 6) {
    
    inquirer.prompt([
      {
        name: "display",
        message: "Try to guess the word",
        message: userCharGuessArray
      }
    ]).then(function(answers) {
      
    //   push the user input into the userCharGuessArray
      userCharGuessArray.push();
      
      userWrongCount++;
      
      userInterface();
    });
    
  }
  else {
    for (var x = 0; x < userCharGuessArray.length; x++) {
      userCharGuessArray[x].printInfo();
    }
  }
};

// call userInterface funtion
userInterface();