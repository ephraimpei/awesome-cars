'use strict';

const createInvalidPriceMessage = (invalidPriceEventType) => {
  const message = invalidPriceEventType === 1 ?
    "Please enter a valid number" :
    "Please enter a value from 10000 to 100000";

  const errMsgElement = $(document.createElement("label"));
  errMsgElement.addClass("error-message invalid-price-message");
  errMsgElement.text(message);

  priceInputWrapper.before(errMsgElement);
};

const createInvalidTradeInMessage = (invalidTradeInEventType) => {

};

const createInvalidPercentageMessage = (invalidPercentageEventType) => {

};
