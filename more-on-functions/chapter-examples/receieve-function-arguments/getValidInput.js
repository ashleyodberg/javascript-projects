/*const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}*/

/*
const input = require('readline-sync');

function getValidInput(prompt, isValid) {

    // Prompt the user, using the prompt string that was passed
    let userInput = input.question(prompt);

    // Call the boolean function isValid to check the input
    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

// A boolean function for validating input
let isEven = function(n) {
    return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven));*/

/*const input = require('readline-sync');

function getValidInput(prompt, isValid) {

    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

let isValidPassword = function(password) {

    // Passwords should have at least 8 characters
    if (password.length < 8) {
    return false;
    }

    return true;
};

console.log(getValidInput('Create a password:', isValidPassword));*/

const input = require('readline-sync');
// TODO 1: write a validator
// that ensures input starts with "a"
function startsWithA(input) {
  return input.toLowerCase().startsWith('a'); //checks if user input starts with the letter 'a'
}//the startsWithA function uses the startWith method to check if the user's input (converted to lowercase for case-insensitivity) starts with the character 'a'
//function 'startsWithA' implements a rule to check whether input begins with 'a'
//the method chain makes sure it is case-insensitive

//checking if what the user typed is one of the vowels
function isVowel(input) { //implements a rule that checks if the userInput is one of the vowels
  const vowels = ['a', 'e', 'i', 'o', 'u']; //array of vowels defined
  return vowels.includes(input.toLowerCase()); //checks if the input, in lowercase, is in the array; this goes through each element of the array 'vowels' and checks to see if userInput characters were vowels
}
//Testing the rules with user input
const input1 = input.question("Enter a string starting with 'a': ");// prompts user to enter something with results being logged to the console
console.log("Valid Result (startsWithA):", startsWithA(input1));

const input2 = input.question("Enter a vowel: ");
console.log("Validation Result (isVowel):", isVowel(input2));

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
