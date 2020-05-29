function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  let sum = num;

  for (var i = num - 1; i > 0; i--) {
    sum *= i;
  }

  document.getElementById('output').innerHTML = sum;
}
