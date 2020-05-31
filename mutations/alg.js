function mutation(arr) {
  let string1 = arr[0].toLowerCase().split('');
  let string2 = arr[1].toLowerCase().split('');

  return string2.every((letter) => string1.indexOf(letter) >= 0);
}

mutation(['hello', 'hey']);
