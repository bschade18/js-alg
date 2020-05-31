function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  }

  let masterString = '';

  for (var i = num; i > 0; i--) {
    masterString += str;
  }

  return masterString;
}

repeatStringNumTimes('abc', 3);
