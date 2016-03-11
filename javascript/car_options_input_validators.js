'use strict';

const priceValidityChecker = (input) => {
  // price validity event types:
  // 0 - input is valid
  // 1 - input is not a number
  // 2 - number is not between 10000 and 100000
  const coercedInput = parseInt(input);

  if (isNaN(coercedInput)) {
    return 1;
  } else if (coercedInput < 10000 || coercedInput > 100000) {
    return 2;
  } else {
    return 0;
  }
};

const tradeInValidityChecker = (input) => {

};

const percentageValidityChecker = (input) => {

};
