//Create an anonymous function and set it equal to a variable.
let practice = function (myArg) { //define an anonymous function named practice that will check the type of the argument myArg using typeof
    if (typeof myArg === "number") { //if 
        return myArg * 3;
    } else if (typeof myArg === "string") {
        return "ARRR!";
    } else {
        return myArg;
    }
}
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let transformedArray = ['Elocution', 21, 'Clean teeth', 100].map(practice);
console.log(transformedArray);
