function celsiusToF(C) {
  let F = (9 / 5) * C + 32;

  return F;
}

let celsius = 15;
document.getElementById('main').innerHTML =
  `${celsius} degrees in Celsius is equal to ` +
  celsiusToF(celsius) +
  ' degress in Fahrenheit';
