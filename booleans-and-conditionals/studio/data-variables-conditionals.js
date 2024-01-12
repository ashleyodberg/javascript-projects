// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) { //the if statement here checks if the value assigned to astronautCount is within the limit of 7
    console.log("Astronaut count within limits."); // if the condition within the previous if statement is true, then the program will print the message within this console.log statement to the console
} else {  //this indicates the start of an 'else' block, meaning if the condition in the if block portion is false, the code after the else statement executes, printing a different console.log message to the console.
    console.log("Abort launch: Too many astronauts.");
}


// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") { //this if statement checks to see if all astronauts are ready, checking if the value assigned to variable astronautStatus is equal to the string 'ready'
    console.log("Astronauts are ready."); // if the condition in the if statement is again true, as previously mentioned, this message will then print to the console.
} else { //beginming of the next else block which executes if the previous if statement's condition(s) are false
    console.log("Abort launch: Not all astronauts are ready."); //if the if statement above is false, the else block executes and this console.log message is printed to the console once again
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) { //initially had a syntax error I believe with having maximimum in the initial declaration and initialization of the variable - corrected to run properly
    console.log("Total mass within limits."); //if statement here checks whether the value assigned to totalMassKg is within the maximumMassLimit variable's value
} else {
    console.log("Abort launch: Total mass exceeds the limit."); //if previous condition is false then this code block executes and prints the console log message that the mass exceeds the limits
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp) { //this if statement checks if fuelTempCelsius is greater than or equal to minimumFuelTemp and less than or equal to maximumFuelTemp
    console.log("Fuel temperature within limits."); //prints the console log statement to the console if true
} else {
    console.log("Abort launch: Fuel temperature outside acceptable range."); //prints if the temperature is not within appropriate limits as determined by the above if statement block
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel level at 100%."); 
} else {
    console.log("Abort launch: Fuel level not at 100%.");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather is clear.");
} else {
    console.log("Abort launch: Weather is not clear.");
}
// Verify shuttle launch can proceed based on above conditions
if (
    astronautCount <= 7 &&
        astronautStatus === "ready" &&
        totalMassKg <= maximumMassLimit &&
        fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp &&
        fuelLevel === "100%" &&
        weatherStatus === "clear"
) {
    console.log("Shuttle launch can proceed. Wish your astronauts a safe flight!");
} else {
    console.log("Shuttle launch aborted. Please check conditions and try again.");
}
