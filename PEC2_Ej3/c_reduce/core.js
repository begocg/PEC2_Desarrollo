function sum(array) {
  const initialValue = 0;
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
  )
}

function productAll(matrix) {
  return matrix.reduce((product, row) => product * row.reduce((rowProduct, element) => rowProduct * element, 1), 1);
}

function objectify(array) {
  return array.reduce((object, item) => {
    var key = item[0];
    var value = item[1];
    object[key] = value;
    return object;
  }, {});
}

function luckyNumbers(array) {
  const numbersString = array.reduce((accumulator, currentNumber, index) => {
    if (index === 0) {
      return currentNumber.toString();
    } else if (index === array.length - 1) {
      return accumulator + ', and ' + currentNumber.toString();
    } else  {
      return accumulator + ', ' + currentNumber.toString();
    }

  }, "" );
  const resultString = "Your lucky numbers are: " + numbersString;

  return resultString;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
