// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (array) {
  return array.some((element) => element > 10);
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (array) {
  return array.some((element) => element.length > 10);
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (matrix) {
  return matrix.some((row) => row.some((element) => element === true));
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (array) {
  return array.some((element) => element.includes("Lost"));
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa

};
