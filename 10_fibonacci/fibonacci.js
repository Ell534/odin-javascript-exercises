const fibonacci = function(fibStep) {
  let count;
  if (typeof fibStep !== "number") {
    count = parseInt(fibStep);
  } else {
    count = fibStep;
  }

  if (count < 0) {
    return "OOPS";
  }
  if (count === 0) {
    return 0;
  }

  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= count; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
