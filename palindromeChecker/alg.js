function palindrome(str) {
  let regEx = /[a-z0-9]/gi;

  let letters = str.match(regEx).join('').toUpperCase();

  let reverse = letters.split('').reverse().join('');
  return reverse === letters;
}

palindrome('eye');
