/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.*/
    for (let i = 0; i <= 20; i++) {
    console.log(i);
    }
//b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}
//c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
for (let i = 12; i >= -14; i -= 2) {
  console.log(i)
}
    //d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */


for (let i = 50; i >= 20; i--) { //for loop initializes i to 50 and continues when i is greater than / equal to 20 and i is decremented each iteration in descending order by 1 each time
  if (i % 3 === 0) { //review more modulus operator logic examples - the idea here is that you check if i is a multiple of 3 using modulus
    console.log(i); //if i is a multiple of 3, then it is printed with this statement
  }
}



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/
let str = 'LaunchCode';
let arr = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
//let str = 'LaunchCode'; //initializes the str variable 'LaunchCode'
//let arr = [1, 5, 'LC101', 'blue', 42]; 

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}




/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let nums = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]; //array for the exercise
let evens = []; //array containing the even numbers
let odds = []; //array holding the odds as specified

for (let i = 0; i < nums.length; i++) {  //initiates a for loop that will iterate over/through each element of the array for the exercise via index 1
  if (nums[i] % 2 === 0) { //condition check to see if the number is even, the modulus operator tells us if the number is divisble by 2
    evens.push(nums[i]); //if it is even it is pushed to the array holding evens
  } else {
    odds.push(nums[i]); //else it will be pushed to the array containing odd numbers
  }
  }
//results printed below to serve as checks
console.log("Evens:", evens);
console.log("Odds:", odds);
