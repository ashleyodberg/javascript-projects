// Code your orbitCircumference function here:
function calculateCircumference(radius) { //created to find the circumference of the orbit
  const circumference = Math.round(2 * Math.PI * radius);
  return circumference; //returns rounded circumference value
}

// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) { //calculate the total distance given number of orbits
  const distance = calculateCircumference(orbitRadius) * orbitsCompleted;
  const time = Math.round((distance / orbitalSpeed) * 100) / 100; //calculate time taken to complete mission
  return time; //retunr rounded time value
}
console.log(`The mission will travel ${calculateCircumference(2000)} km aroun the planet, and it will take ${missionDuration(5)} hours.`);

// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbits = 3, orbitRadius = 2000, orbitalSpeed = 28000) {
  const spacewalkTime = missionDuration(orbits, orbitRadius, orbitalSpeed); //calculate the time for the spacewalk with missionDuration
  const oxygenUsed = candidate.o2Used(spacewalkTime).toFixed(3); //calculate amount of oxygen used

  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${oxygenUsed} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 