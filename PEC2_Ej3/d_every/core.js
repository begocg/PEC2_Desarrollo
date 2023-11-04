// Check to see if all elements in an array
// are even numbers.

function allEven(array) {
  return array.every((element) => element % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(array) {
  const tipoPrimerElemento = typeof array[0];
  return array.every(elemento => typeof elemento === tipoPrimerElemento);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(matrix) {
  const sonArrays = matrix.every((element) => Array.isArray(element));
  const sonMayoresQueCero = matrix.every((subarray) => subarray.every((element) => element > 0));


  if (sonArrays && sonMayoresQueCero) {
    return true;
  } else {
    return false;
  }
  

}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(array) {
  const sonStrings = array.every((element) => typeof element === 'string');
  const mismaVocal = array.every((element) => {
  element = element.replace(/[qwrtypsdfghjklñzxcvbnm]/g, '');
  const vocales = new Set(element.split(''));
  return vocales.size === 1;
  });
  
if (sonStrings && mismaVocal) {
  return true;
} else {
  return false;
}
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
