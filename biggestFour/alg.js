function largestOfFour(arr) {
  let finalFour = [];

  arr.forEach((a) => {
    finalFour.push(Math.max(...a));
  });

  return finalFour;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
