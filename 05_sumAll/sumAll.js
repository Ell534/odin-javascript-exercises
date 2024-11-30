const sumAll = function(min, max) {
  let sumVal = 0

  if (min < 0 || max < 0) {
    return "ERROR"
  }

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR"
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  for (let i = min; i <= max; i++) {
    sumVal += i
  }
  return sumVal
};

// Do not edit below this line
module.exports = sumAll;
