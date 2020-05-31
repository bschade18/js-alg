function findLongestWordLength(str) {
  let longest = 0;
  let words = str.split(' ');

  words.forEach((number) => {
    let length = number.length;
    if (length > longest) {
      longest = length;
    }
  });
  return longest;
}
findLongestWordLength('The quick brown fox jumped over the lazy dog');
