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
if (astronautCount <= 7) {
    console.log("Astronaut count within limits.");
} else { 
    console.log("Abort launch: Too many astronauts.");
}


// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronauts are ready.");
} else {
    console.log("Abort launch: Not all astronauts are ready.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) { //initially had a syntax error I believe with having maximimum in the initial declaration and initialization of the variable - corrected to run properly
    console.log("Total mass within limits.");
} else {
    console.log("Abort launch: Total mass exceeds the limit.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp) {
    console.log("Fuel temperature within limits.");
} else {
    console.log("Abort launch: Fuel temperature outside acceptable range.");
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
