function frankenSplice(arr1, arr2, n) {
  // let arr2copy = [...arr2];
  // this works but instructions were to use slice
  let arr2copy = arr2.slice();

  arr2copy.splice(n, 0, ...arr1);

  return arr2copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
