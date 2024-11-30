const removeFromArray = function(inputArray, ...args) {
  const outputArray = []

  inputArray.forEach((item) => {
    if (!args.includes(item)) {
      outputArray.push(item)
    }
  })
  return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
