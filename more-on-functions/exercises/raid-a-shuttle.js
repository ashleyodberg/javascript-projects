function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

// Steal some fuel from the shuttle:
 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.
/*
//testing the above function
let stolenFuel = nonSuspiciousFunction(fuelLevel);
console.log("Stolen fuel level: " + stolenFuel);*/

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.
let nonSuspiciousFunction = function (fuelLevel) {
  let newFuelLevel = gatherNewFuel(fuelLevel);

  let currentColor = checkFuel(fuelLevel);

  if (currentColor === 'green') {
    return fuelLevel - Math.min(100001, fuelLevel);
  } else if (currentColor === 'yellow') {
    return fuelLevel - Math.min(50001, fuelLevel);
  } else {
    return fuelLevel;
  }
};

let gatherNewFuel = function (currentFuelLevel) {
  return currentFuelLevel - 10000;
};

let stolenFuel = nonSuspiciousFunction(fuelLevel);
console.log("Stolen fuel level: " + stolenFuel);

console.log("Fuel level: " + checkFuel(nonSuspiciousFunction(fuelLevel)));
console.log("Hold status: " + holdStatus(cargoHold));

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.

// Next, liberate some of that glorious cargo.
 
//this following function takes two itemsf rom our cargo hold, puts them in a new array, and returns the new array storing our stolen items
//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.
/*let innocentFunction = function (cargoArray) {
  let stolenItems = [cargoArray[1]];
  return stolenItems;
};*/
//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.
let innocentFunction = function (cargoArray) {
  let stolenItems = [cargoArray[0], cargoArray[1]];

  cargoArray[0] = "worthless item";
  cargoArray[1] = "worthless item";

  return cargoArray;
}
//d). Don’t get hasty, matey! Remember to test your function.

// Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
let receipt = `Raided ${stolenFuelLevel} kg of fuel from the tanks, and stole ${stolenCargoItems[0]} and {stolenCargoItems[2]} from the cargo hold.`;
console.log(receipt);

 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."

let irs = function (fuelLevel, cargoHold) {
  let stolenFuelLevel, stolenCargoItems;
  let fuelStealResult = stealAndReplace([fuelLevel], [0], 0);
  stolenFuelLevel = fuelStealResult.stolenItems[0];
  fuelLevel = fuelStealResult.newArray[0];

  let cargoStealResult = stealAndReplace(cargoHold, [0, 1], 'worthless item');
  stolenCargoItems = cargoStealResult.stolenItems;
  cargoHold = cargoStealResult.newArray;

  return { stolenFuelLevel, stolenCargoItems, fuelLevel, cargoHold };
};

let irsResult = irs(fuelLevel, cargoHold);
let { stolenFuelLevel, stolenCargoItems, fuelLevelAfterTheft, cargoHoldAfterTheft } = irsResult;
let receipt = `Raided ${stolenFuelLevel} kg of fuel from the tanks, and stole ${stolenCargoItems[0]} and ${stolenCargoItems[1]} from the cargo hold.`;

console.log(receipt);
