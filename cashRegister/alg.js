function checkCashRegister(price, cash, cid) {
  // sum cash in drawer
  var cidTotal = 0;
  for (var i = 0; i < arguments[2].length; i++) {
    cidTotal += arguments[2][i][1];
  }
  var change = cash - price;

  if (cidTotal < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (cidTotal == change) {
    return { status: 'CLOSED', change: cid };
  }

  // compare cash to change
  var valueArray = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  // sum current change

  var changeArray = [];
  var changeSum = 0;

  for (var i = arguments[2].length - 1; i >= 0; i--) {
    var remainingChange = Number((change - changeSum).toFixed(2));

    if (changeSum == change) {
      return { status: 'OPEN', change: changeArray };
      break;
    } else if (arguments[2][i][1] == 0) {
      continue;
    } else if (valueArray[i] > remainingChange) {
      continue;
    } else if (arguments[2][i][1] < remainingChange) {
      changeArray.push(arguments[2][i]);
      changeSum += arguments[2][i][1];
      continue;
    } else {
      changeArray.push([
        arguments[2][i][0],
        Math.floor(remainingChange / valueArray[i]) * valueArray[i],
      ]);
      changeSum += Math.floor(remainingChange / valueArray[i]) * valueArray[i];
    }
  }

  if (Number(changeSum).toFixed(2) == change) {
    return { status: 'OPEN', change: changeArray };
  }
  if (changeSum < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
