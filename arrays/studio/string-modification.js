const input = require('readline-sync'); //we are importing the readline-sync module after running npm i in the package.json file
let str = "LaunchCode"; //initialize the variable with the string, LaunchCode

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0, 3); //I've assigned the substrings to a new variable, 'newStr', creating a new string with my respelled word
// console.log(str); 
let defaultAnswer = str.slice(3) + str.slice(0, 3);
let answer = defaultAnswer;
console.log();


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Part 1: Response: ${str}\nModified String: ${newStr}`); //prints the original and modified strings on separate lines with accompanying text
console.log(`Response ${answer}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let quantity = input.question('Please, input number of letters to move: ');
//const numLetters = readlineSync.question('Enter the number of characters that will be relocated: '); 
//console.log(numLetters);
answer = str.slice(quantity).concat(str.slice(0, quantity));
console.log(`Response ${answer}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (quantity < 0) {
    console.log(`Part 3: Due to the input being less than string length, you get the default of: ${defaultAnswer}`);
} else if (quantity > str.length) {
    console.log(`Part 3: Erorr - Due to the input being larger than the string length, you get the ${answer} again.`);
} else {
    console.log(`Part 3: Here you go: ${answer}`);
}
