//Create an array called practiceFile with the following entry: 273.15
let practiceFile = [273.15]; //initializes the array called practiceFile with its iniitial entry 
console.log(practiceFile); //prints the array containing 273.15 to debug console

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
practiceFile[1] = "42"; //adds 42 to the array practiceFile at index 1 
console.log(practiceFile);
practiceFile[2] = "hello"; //secondly, we add 'hello' to the array at index 2
console.log(practiceFile);

//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.
practiceFile.push(false, -4.6, "87"); //push is used to add the 3 changes to the end of the array, adding multiple elements at once
console.log(practiceFile);
