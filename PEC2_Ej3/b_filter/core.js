function onlyEven(array) {
  return array.filter(number => number % 2 === 0);
  }

function onlyOneWord(array) {
  return array.filter(item => /^\S+$/.test(item));
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(number => typeof number === 'number' && number > 0));
}

function allSameVowels(array) {
  const vowels = 'aeiouAEIOU';
 return array.filter(word => {
    const uniqueVowels = Array.from(new Set(word.toLowerCase().split('').filter(char => vowels.includes(char))));
    return uniqueVowels.length === 1;
  })
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
