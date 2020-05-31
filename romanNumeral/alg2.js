function convertToRoman(num) {
  //  removed break statements from switch
  // convert num to a string
  var str = num.toString();

  var romanNumerals = {
    ones: {
      0: '',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
    },
    tens: {
      0: '',
      1: 'X',
      2: 'XX',
      3: 'XXX',
      4: 'XL',
      5: 'L',
      6: 'LX',
      7: 'LXX',
      8: 'LXXX',
      9: 'XC',
    },
    hundreds: {
      0: '',
      1: 'C',
      2: 'CC',
      3: 'CCC',
      4: 'CD',
      5: 'D',
      6: 'DC',
      7: 'DCC',
      8: 'DCCC',
      9: 'CM',
    },
    thousands: {
      0: '',
      1: 'M',
      2: 'MM',
      3: 'MMM',
      4: 'MMMM',
      5: 'MMMMM',
      6: 'MMMMMM',
      7: 'MMMMMMM',
      8: 'MMMMMMMM',
      9: 'MMMMMMMMM',
    },
  };
  // build roman numeral based on string length
  switch (str.length) {
    case 1:
      return romanNumerals.ones[str[0]];

    case 2:
      return romanNumerals.tens[str[0]] + romanNumerals.ones[str[1]];

    case 3:
      return (
        romanNumerals.hundreds[str[0]] +
        romanNumerals.tens[str[1]] +
        romanNumerals.ones[str[2]]
      );

    default:
      return (
        romanNumerals.thousands[str[0]] +
        romanNumerals.hundreds[str[1]] +
        romanNumerals.tens[str[2]] +
        romanNumerals.ones[str[3]]
      );
  }
}

convertToRoman(36);
