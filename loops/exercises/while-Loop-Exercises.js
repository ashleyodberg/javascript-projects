//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
/*let startingFuelLevel = 0;
let numAboard = 0;
let shuttleAltitude = 0;*/
let fuelLevel = 0, numAboard = 0, shuttleAltitude = 0; //initializes variables for fuel level, num of astronauts and the shuttle's altitude




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) { //implements a while loop  that will make sure the user input is a valid fuel level
  fuelLevel = input.question("Enter the starting fuel level: "); //prompts the user to input their answer for the starting fuel amount
}





//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (numAboard < 1 || numAboard > 7 || !Number.isInteger(numAboard)) { //makes sure the user has entered a valid num of astronauts
  numAboard = input.question("Enter the number of astronauts (1-7): "); //prompts the user for the num of astronauts
  numAboard = parseInt(numAboard); //converts user input to an integer
}
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel - 100 * numAboard >= 0) { //while loop to monitor status of the fuel and altitude of the shuttle
  shuttleAltitude += 50; //increases altitude by 50 km each iteration
  fuelLevel -= 100 * numAboard; ///decreases fuel by 100 units per astronaut
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${shuttleAltitude} km. `; //initializes string for output

if (shuttleAltitude >= 2000) { //tells us whether the shuttle achieved orbit based on shuttle altitude
  output += "Orbit achieved!"; 
} else {
  output += " Failed to reach orbit.";
}

console.log(output);