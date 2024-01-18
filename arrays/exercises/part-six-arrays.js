//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];



//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
//kind of confused here, quite stumped...
let table = []; //this creates an empty array named 'table', like an empty container we can store things in
table.push(element1, element2, element26); //push is sort of like placing the arrays into the 'table' container, like items in a basket

console.log(table); //output: "(3) [Array(3), Array(3), Array(3)] and each item or array inside of the table has 3 elements"

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]); //prints entire array at index 1, element2 in this case...
console.log(table[1][1]); //prints element at index within the array at index 1


//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);
//need more practice with three dimensional arrays as my logic is lost here...


//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

//disclaimer: had help walk me through this to practice going through the motions of coding and practicing this thinking:
//first you need to define and initialize arrays for whatever topic you do:
const mercury = ['Mercury', 'Hg', 0.055];
const venus = ['Venus', 'Ve', 0.815];
const earth = ['Earth', 'Ea', 1.0];
const mars = ['Mars', 'Ma', 0.107];

//create the 3d array and give it a name - spaceObjects in this case...use push() to add your previously defined and initialized arrays to it
const spaceObjects = [];
spaceObjects.push([mercury], [venus], [earth], [mars]);

console.log(spaceObjects[0]); //print the first level of the 3d array
console.log(spaceObjects[0][0]); //print the second level of the 3d array here
console.log(spaceObjects[0][0][1]); //print the third level (symbol for mercury then)
