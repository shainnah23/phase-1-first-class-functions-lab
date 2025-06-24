// Code your solution in this file!
/**
 * 1) should return a new array containing the first two drivers from the passed-in array
 */
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

/**
 * 2) should return an array of the last two drivers
 */
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

/**
 * 3) has the `returnFirstTwoDrivers` function to as its first element
 * 4) has the `returnLastTwoDrivers` function to as its last element
 * 5) allows us to invoke either function from the array
 */
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/**
 * 6) returns a function
 * 7) should multiply a given value using the created multiplier
 */
function createFareMultiplier(multiplier) {
  return function(value) {
    return value * multiplier;
  };
}

/**
 * 8) is a function
 * 9) doubles fares
 */
const fareDoubler = createFareMultiplier(2);

/**
 * 10) is a function
 * 11) triples fares
 */
const fareTripler = createFareMultiplier(3);

/**
 * 12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
 * 13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
 */
function selectDifferentDrivers(arrayOfDrivers, selectorFunction) {
  return selectorFunction(arrayOfDrivers);
}

// You might need to export these if your test file is importing them
// module.exports = {
//   returnFirstTwoDrivers,
//   returnLastTwoDrivers,
//   selectingDrivers,
//   createFareMultiplier,
//   fareDoubler,
//   fareTripler,
//   selectDifferentDrivers,
// };