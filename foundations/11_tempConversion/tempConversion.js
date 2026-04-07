const convertToCelsius = function (F) {

  let C = +((F - 32) * 5 / 9).toFixed(1);
  return C
};

// convertToCelsius(-73.3)

const convertToFahrenheit = function (C) {

  let F = +(C * 9 / 5 + 32).toFixed(1);
  return F
};

// convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
