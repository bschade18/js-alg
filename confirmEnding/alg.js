function confirmEnding(str, target) {
  let extraction = str.substring(str.length - target.length);

  return extraction === target;
}

confirmEnding('Bastian', 'n');
