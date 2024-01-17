// let num = 1001;
let num = 123.45;
//Returns 'undefined'.
// console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
//console.log(String(num).length); //returns 4 as that is the length

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//let decimalLength = String(num).replace('.', '').length; //replace removes the decimal from the string representation of the number, while length retrieves the length of the string after the period is removed
//console.log(decimalLength);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.


let numString = String(num);
let lengthWithoutDecimal = numString.includes('.') ? numString.replace('.', '').length : numString.length;
console.log(lengthWithoutDecimal);


if (String(num).includes('.')) {
    console.log(String(num).length - 1);
} else {
    console.log(String(num).length);
}
 //Admittedly a bit more stumped on this last bit, the conditionals have really been a sticking point... 