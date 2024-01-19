// create an array variable containing the names
let names = ["Shrek", "Donkey", "Fiona", "Lord Farquaad", "Puss In Boots"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// write a for loop that prints each name on a different line


//Flow of Execution of the for loop practice (sec 2 of reading)
/*for (let i = 0; i < 51; i++) { //When the program reaches the for loop, the initial expression, let i = 0, is executed, declaring the variable i and initializing it to the value 0.
    //the loop condition is i < 51, and is evaluted, returning true because 0 is less than 51.
    //Since the condition is true, the loop body executes, printing 0. Then the update expression, i++ is executed, setting i = 1, this completes the first full iteration of the loop.
    //Steps 2-4 are repeated, using the new value of i, continuing until the loop condition evaluates to false in step 2, ending the loop. 
    console.log(i);
}*/