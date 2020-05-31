function sumAll(arr) {
  var sort = arr.sort((a, b) => a - b);
  var sum = 0;
  for (var i = sort[0]; i <= sort[1]; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
