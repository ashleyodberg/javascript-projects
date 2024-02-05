//Import modules:
const input = require('readline-sync');//Import readline-sync.
const averages = require('./ScoreCalcs/averages.js');
//const averages = require('./ScoreCalcs/averages.js');
//const averages = require('./averages.js'); //Import functions from averages.js.
const printAll = require('./display.js').printAll; //Import function from display.js.
const randomSelect = require('./randomSelect.js').randomFromArray; //Import function from randomSelect.js.

//Candidate data:
let astronauts = ['Fox','Turtle','Cat','Hippo','Dog'];

const testTitles = ['Math','Fitness','Coding','Nav','Communication'];

let scores = [[95, 86, 83, 81, 76],[79, 71, 79, 87, 72],[94, 87, 87, 83, 82],[99, 77, 91, 79, 80],[96, 95, 99, 82, 70]];

//User interface:
let prompts = ['display all scores', 'average the scores for each test', 'average the scores for each astronaut','select the next spacewalker'];

for (let i = 0; i<prompts.length; i++){
  let response = input.question(`Would you like to ${prompts[i]}? Y/N: `);

  if (response.toLowerCase()==='y') {
    if (i===0) {
      //Call 'printAll' here and pass in all necessary arguments.
      printAll(astronauts, testTitles, scores);
    } else if (i === 1) {
      for (let j = 0; j < testTitles.length; j++) {
      let avg = averages.averageForTest(j, scores);
      console.log(`${testTitles[j]} test average = ${avg.toFixed(1)}%.`);
      /*for (let j = 0; j<testTitles.length; j++){
        let avg = //Call 'averageForTest' here. Pass in j and scores as arguments.
        console.log(`${testTitles[j]} test average = ${avg}%.`);*/
    }
    } else if (i === 2) {
      for (let j = 0; j < astronauts.length; j++) {
        let avg = averages.averageForStudent(j, scores);
        console.log(`${astronauts[j]}'s test average = ${avg.toFixed(1)}%.`);
      }
      /*for (let j = 0; j<astronauts.length; j++){
        let avg = //Call 'averageForStudent' here. Pass in j and scores as arguments.
        console.log(`${astronauts[j]}'s test average = ${avg}%.`);*/
    } else {
      let walker = randomSelect(astronauts);//Call 'randomSelect' to pick a spacewalker from the astronauts array.
      console.log(`${walker} is the next spacewalker.`);
    }
  } else {
    console.log("Option skipped.");
  }
}




//Display all scores: 
printAll(astronauts, testTitles, scores);

//calculate and display average for each test
for (let j = 0; j < testTitles.length; j++) {
  averages.averageForTest(j, scores);
}

//Calculate and display average for each astronaut
for (let i = 0; i < astronauts.length; i++) {
  let avg = averages.averageForStudent(i, scores);
  console.log(`${astronauts[i]}'s test average = ${avg.toFixed(1)}%.`);
}

//select the next spacewalker
let nextSpaceWalker = randomSelect(astronauts);
console.log(`Would you like to select the next spacewalker? Y/N: y\n${nextSpaceWalker} is the next spacewalker.`);