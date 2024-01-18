let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold[5] = 'space tether'; //using bracket notation here enables us to navigate to the index 5 position in the array and replace it with our desired value 'space tether'
console.log(cargoHold);
//2) Remove the last item from the array with pop. Print the element removed and the updated array.
let removedItem = cargoHold.pop();
console.log(`Element removed: ${removedItem}`);
console.log(cargoHold);

//3) Remove the first item from the array with shift. Print the element removed and the updated array.
let removedFirstItem = cargoHold.shift(); //the shift method takes and returns the first element of an array
console.log(`Element removed: ${removedFirstItem}`); //I stored the removed array item in the variable declared as 'removedFirstItem' and print it and the array to double check my work
console.log(cargoHold);

//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.unshift(1138, '20 meters'); //unshift requires arguments within the parentheses - 1138 and '20 meters' in this case
console.log(cargoHold);


//5) Use a template literal to print the final array and its length.
//I will be using a template literal statement to print the final resulting array and its length respectively

console.log(`Final array: ${cargoHold}, Length: ${cargoHold.length}`);
//this uses length method as well to return the length of the array in its final state
