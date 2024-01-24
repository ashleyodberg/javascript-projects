const readlineSync = require('readline-sync');
//Rectangles
//makeLine(size) function
function makeLine(size) { //declares the makeLine function taking a single parameter called 'size' - which will be used to generate a line of # characters
    let line = ''; //creating a 'line' variable & initializing to an empty string to store our line of # characters as we go
    for (let i = 0; i < size; i++) {  //begins our for loop to help us build our line 
        line += '#'; //adding a # to the line variable each iteration, concatenating # to build our line
    }
    return line; //we've built our line and are asking for it to be provided back to us 
} //necessary closing brace of the makeLine function
console.log(makeLine(5)); //calling the makeine function with an argument of '5' and are logging the result to the console

//makeSquare(size) function

/*function makeSquare(size) { //declares the makeSquare function taking a single parameter called 'size' which will be used to generate a square
    let square = ''; //initializes empty string 'square' to store entire square
    for (let i = 0; i < size; i++) {
        let row = makeLine(size); //we are calling the makeLine function to create each row of our square of characters
        square += row + '\n'; //concatenate the row to the square string
    }

    return square;
}


console.log(makeSquare(6));*/

//makeRectangle(width, height) function
/*function makeRectangle(width, height) {
    if (width <= 0 || height <= 0) {
        return "Invalid dimensions. Width and height must be greater than 0.";
    }

    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle;
}

console.log(makeRectangle(5, 3));*/

function makeRectangle(width, height) {
    if (width <= 0 || height <= 0) {
        return "Invalid dimensions. Width and height must be greater than 0.";

    }

    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle;
}

console.log(makeRectangle(5, 3));

//makeSquare size function using makeRectangle
function makeSquare(size) {
    return makeRectangle(size, size);
}

console.log(makeSquare(6));

//Triangles
//makeDownwardStairs(height) function:
function makeDownwardStairs(height) { //declares the makeDownwardStairs function with height parameter and the curly brace to indicate the opening of this function's code block
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));

//makeSpaceLine(numSpaces, numChars) function:

function makeSpaceLine(numSpaces, numChars) {
    let spaces = ' '.repeat(numSpaces); //creates a string comprised only of spaces
    let hashes = '#'.repeat(numChars); //creates a string comprised only of hashes
    return spaces + hashes + spaces; //concatenates spaces, hashes, and remaining spaces
}

console.log(makeSpaceLine(3, 5));


//makeIsoscelesTriangle(height) function
function makeIsoscelesTriangle(height) {
    let triangle = ''; 
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(5));

//Diamonds

//makeDiamond(height) function -- full disclosure: had help walking me through this one since the logic is a bit tricky for me
function makeDiamond(height) {
    if (height % 2 === 0) { //if height is even, make it odd for symmetry of the diamond
        height++;  
    }

    let diamond = '';

    //top half
    for (let i = 1; i <= height; i += 2) {
        let spaces = ' '.repeat((height - i) / 2);
        let hashes = '#'.repeat(i);
        diamond += spaces + hashes + '\n';
    }

    //bottom half 
    for (let i = height - 2; i >= 1; i -= 2) {
        let spaces = ' '.repeat((height - i) / 2);
        let hashes = '#'.repeat(i);
        diamond += spaces + hashes + '\n';
    }

    return diamond;
}

console.log(makeDiamond(5));

//for practice: make it ask for user input for height of diamond
function generateDiamond() {
    let userInput = readlineSync.question("Enter a number to generate a diamond: ");
    let height = parseInt(userInput);

    if (isNaN(height) || height <= 0) {
        alert("Invalid input. Please enter a positive number.");
        return;
    }

    let diamond = makeDiamond(height);

    console.log(diamond);
}

generateDiamond();
