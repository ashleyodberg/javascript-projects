// Code your crewMass function here:
function crewMass(crew) {
  //calculate crew mass total
  const totalMass = crew.reduce((sum, member) => sum + member.mass, 0);
  return totalMass;
}

// Code your fuelRequired function here:
function fuelRequired(crew, uncrewedRocketMass = 75000) {
  //calculate total crew member mass
  const totalCrewMass = crewMass(crew);

  //total mass for launch
  const totalLaunchMass = uncrewedRocketMass + totalCrewMass;
  let baseFuelRequired = totalLaunchMass * 9.5;

  for (const member of crew) {
    baseFuelRequired += (member.species === 'dog' || member.species === 'cat') ? 200 : 100;
  }

  const finalFuelRequired = Math.ceil(baseFuelRequired);

  return finalFuelRequired;
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.


//moving this to the end to see if it works: console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires${fuelRequired(crew)} kg of fuel.`);

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

 let crew = [candidateB,candidateD,candidateF];
 console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires${fuelRequired(crew)} kg of fuel.`);
