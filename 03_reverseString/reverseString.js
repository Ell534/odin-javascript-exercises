const reverseString = function(input) {
  let reversed = ""
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i]
  }
  console.log(reversed)
  return reversed
};

// Do not edit below this line
module.exports = reverseString;
