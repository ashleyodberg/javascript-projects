// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
// crewStatus is ONLY true if *BOTH* spaceSuitsOn AND shuttleCabinReady are both true
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements: 
//I think it will print "engines are off" to the console as the conditions in the first two console.log statements are not met by the variable


if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

//my prediction was correct and it printed 'engines are off' to the debug console

 





