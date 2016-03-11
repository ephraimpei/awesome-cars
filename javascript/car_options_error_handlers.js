'use strict';

const createInvalidPriceMessage = (invalidPriceEventType) => {
  let message;

  const errMsgElement = $(document.createElement("label"));

  switch (invalidPriceEventType) {
    case 1:
      message = "Please enter a valid number";
      errMsgElement.addClass("error-message invalid-price-message");
      break;
    case 2:
      message = "Please make sure trade percent input is valid";
      errMsgElement.addClass("error-message invalid-trade-in-value-message from-price");
      break;
    case 3:
      message = "Please enter a value from 0 to 100000";
      errMsgElement.addClass("error-message invalid-price-message");
      break;
  }

  errMsgElement.text(message);

  invalidPriceEventType === 2 ? tradeInValueWrapper.before(errMsgElement) :
    purchasePriceBox.before(errMsgElement);
};

const createInvalidTradeInMessage = (invalidTradeInEventType, currentPrice) => {
  let message;

  const errMsgElement = $(document.createElement("label"));

  switch (invalidTradeInEventType) {
    case 1:
      message = "Please enter a valid number";
      errMsgElement.addClass("error-message invalid-trade-in-value-message");
      break;
    case 2:
      message = "Please make sure purchase price is a valid input";
      errMsgElement.addClass("error-message invalid-price-message from-percent");
      break;
    case 3:
      message = "Please enter a trade in value from 0 to " + currentPrice;
      errMsgElement.addClass("error-message invalid-trade-in-value-message");
      break;
  }

  errMsgElement.text(message);

  if (invalidTradeInEventType === 2 && $(".error-message.from-percent").length === 0) {
    purchasePriceBox.before(errMsgElement)
  } else if (invalidTradeInEventType === 1 || invalidTradeInEventType === 3){
    tradeInValueWrapper.before(errMsgElement);
  }
  // invalidTradeInEventType === 2 ? purchasePriceBox.before(errMsgElement) :
  //   tradeInValueWrapper.before(errMsgElement);
};

const createInvalidPercentageMessage = (invalidPercentageEventType) => {
  let message;

  const errMsgElement = $(document.createElement("label"));

  switch (invalidPercentageEventType) {
    case 1:
      message = "Please enter a valid number";
      errMsgElement.addClass("error-message invalid-trade-in-value-message");
      break;
    case 2:
      message = "Please make sure purchase price is a valid input";
      errMsgElement.addClass("error-message invalid-price-message from-percent");
      break;
    case 3:
      message = "Please enter a percent value from 0 to 100";
      errMsgElement.addClass("error-message invalid-trade-in-value-message");
      break;
  }

  errMsgElement.text(message);

  if (invalidPercentageEventType === 2 && $(".error-message.from-percent").length === 0) {
    purchasePriceBox.before(errMsgElement)
  } else if (invalidPercentageEventType === 1 || invalidPercentageEventType === 3){
    tradeInValueWrapper.before(errMsgElement);
  }
};
