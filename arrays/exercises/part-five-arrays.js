let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
/*let splitString = str.split();
console.log(str);

console.log(str.split());*/

let splitString1 = str.split();
let splitString2 = str.split('e');
let splitString3 = str.split(' ');
let splitString4 = str.split('');
console.log(splitString1); //no separator was provided so the entire string becomes the sole element here
console.log(splitString2); //splits the string at each 'e'
console.log(splitString3); //splits the string at each space
console.log(splitString4); //splits the string at each character


//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let joinResult1 = arr.join();
let joinResult2 = arr.join('a');
let joinResult3 = arr.join(' ');
let joinResult4 = arr.join('');
console.log(joinResult1);
console.log(joinResult2);
console.log(joinResult3);
console.log(joinResult4);



//3) Do split or join change the original string/array?
console.log(str);
console.log(arr);
//it appears neither split nor join alter the original string or array...they return a new array or string altogether.
 
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let alphabetizedCargoHoldArray = cargoHold.split(',').sort(); //this splits the cargoHold array into its individual elements then returns a new string where the individual elements have been alphabetized
let newStringFromAlphabetizedArray = alphabetizedCargoHoldArray.join(',');
console.log(newStringFromAlphabetizedArray);
