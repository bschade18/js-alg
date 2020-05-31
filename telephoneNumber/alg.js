function telephoneCheck(str) {
  // Good luck!

  var alpha = /[A-Za-z]/g;
  var alphaTest = alpha.test(str);

  var dig = /\d/g;
  var digTest = str.match(dig);

  var countryCheck = /^[1]/;
  var countryTest = countryCheck.test(str);

  var split = str.split('');

  if (alphaTest) {
    return false;
  } else if (digTest.length < 10 || digTest.length > 11) {
    return false;
  } else if (digTest.length == 11 && countryTest == false) {
    return false;
  } else if (
    digTest.length == 10 &&
    split.indexOf('(') >= 0 &&
    split.indexOf('(') != 0
  ) {
    return false;
  } else if (split.indexOf('?') > 0) {
    return false;
  } else if (split.indexOf(')') > 6) {
    return false;
  } else if (split.indexOf('(') >= 0 && split.indexOf(')') == -1) {
    return false;
  } else if (split.indexOf(')') >= 0 && split.indexOf('(') == -1) {
    return false;
  }
  return true;
}

telephoneCheck('555-555-5555');
