function getIndexToIns(arr, num) {
  arr.push(num);

  let sort = arr.sort((a, b) => a - b);

  return sort.indexOf(num);
}

getIndexToIns([40, 60], 50);
