const arrayToSpacedSeparatedString = (arr) => {
  let names = "";
  for (let i = 0; i < arr.length; i++) {
    names += arr[i] + " ";
  }

  return names;
};

module.exports = arrayToSpacedSeparatedString;