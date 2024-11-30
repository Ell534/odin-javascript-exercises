const convertToCelsius = function(temp) {
  const celcius = (temp - 32) * (5 / 9)
  const roundedCelcius = Math.round(celcius * 10) / 10
  return roundedCelcius
};

const convertToFahrenheit = function(temp) {
  const fahrenheit = (temp * 9 / 5) + 32
  const roundedFahrenheit = Math.round(fahrenheit * 10) / 10
  return roundedFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
