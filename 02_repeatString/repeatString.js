const repeatString = function(input, repeats) {
  if (repeats < 0) {
    return "ERROR"
  }
  let returnString = ""
  for (let i = 0; i < repeats; i++) {
    returnString += input
  }
  return returnString
};

// Do not edit below this line
module.exports = repeatString;
