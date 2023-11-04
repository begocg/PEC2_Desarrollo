const data = require('./data');

function entryCalculator(entrants) {
  if (arguments.length === 0) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  let totalCost = 0;
  for (let category in entrants) {
    totalCost += data["prices"][category] * entrants[category];
  }
  return totalCost;
}

function schedule(dayName) {

}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
