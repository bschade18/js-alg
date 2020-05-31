function rot13(str) {
  // LBH QVQ VG!

  var cipher = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
  };

  var split = str.split('');
  var decodedArray = [];

  for (var i = 0; i < split.length; i++) {
    if (cipher.hasOwnProperty(split[i])) {
      decodedArray.push(cipher[split[i]]);
    } else {
      decodedArray.push(split[i]);
    }
  }

  var decodedString = decodedArray.join('');
  return decodedString;
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');
