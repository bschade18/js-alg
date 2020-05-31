function findElement(arr, func) {
  let filter = arr.filter(func);
  let result = filter[0];

  if (!result) {
    return undefined;
  }
  return result;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
