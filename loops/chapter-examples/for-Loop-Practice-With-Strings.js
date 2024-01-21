// Create a string variable containing your name.
let myName = 'Ashley Nicholas';
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}

// Write a for loop that prints each character in your name on a different line.
//see above code

//Breaking Down the for Statement
for (let i = 0; i < 51; i = i + 2) {
    console.log(i);
}

let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}



//Iterating Over Strings section practice
/*let name = "LaunchCode";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
} //since name.length is 10, the loop executes once each for the value of i from 0 to 9*/
//The loop body (console.log(name[i]); will print name [i] each time

//The accumulator pattern practice
let n = 6;
let total = 0;

for (let i = 1; i <= n; i++) {
    total += i;
}

console.log(total);
