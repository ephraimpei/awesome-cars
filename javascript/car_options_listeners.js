'use strict';

// Purchase Price input box
const checkAndRemovePurchasePriceErrMessages = () => {
  if ($(".invalid-price-message").show()) {
    $(".invalid-price-message").remove();
  }
};

const getNewData = (price) => {
  $(".car-index-item").remove();
  const carDataSet = createDataSet(12, price);
  const carIndexItems = createCarIndexItems(carDataSet);
  carsIndex.append(carIndexItems);
};

const updateTradeInInputValue = (price, percent) => {
  const updatedTradeInValue = price * percent;

  // round trade in value to 2 decimal places
  // tradeInInput.val(Math.round(updatedTradeInValue * 100) / 100)
  tradeInInput.val(Math.round(updatedTradeInValue))
};

const updatePriceSlider = (price) => {
  priceSlider.val(price);
  priceSliderMarker.css("left", Math.floor((price / 100000) * 100) + "%");
};

priceInput.on("input", (e) => {
  // remove error message(s) if there are any
  checkAndRemovePurchasePriceErrMessages();
});

priceInput.keypress( (e) => {
  if (e.which === 13) {
    const input = e.currentTarget.value;
    const currentPercent = parseInt(percentInput.val());
    const priceValidityResult = priceValidityChecker(input, currentPercent);

    // if input is valid, create (fetch) new content and update other fields
    // else create error message
    if (priceValidityResult === 0) {
      fadeInputBoxOutline(purchasePriceBox);
      fadeInputBoxOutline(tradeInValueBox);

      priceInput.val(input);
      const price = parseInt(input);
      const percent = parseInt(currentPercent) / 100;

      updateTradeInInputValue(price, percent);
      updatePriceSlider(price);
      getNewData(price);
    } else {
      createInvalidPriceMessage(priceValidityResult);
    }
  }
});

// Trade-in Value input box
const checkAndRemoveTradeInErrMessages = () => {
  if ($(".invalid-trade-in-value-message").show()) {
    $(".invalid-trade-in-value-message").remove();
  } else if($(".invalid-trade-in-percent-message")) {
    $(".invalid-trade-in-percent-message").remove();
  }
};

const updateTradeInSlider = (percentValue) => {
  tradeInSlider.val(percentValue);
  tradeInSliderMarker.css("left", percentValue + "%");
};

const updateTradeInPercentageValue = (value, currentPrice) => {
  const percentValue = Math.round((value / currentPrice) * 100);
  percentInput.val(percentValue);
  updateTradeInSlider(percentValue);
}

tradeInInput.on("input", (e) => {
  checkAndRemoveTradeInErrMessages();
});

tradeInInput.keypress( (e) => {
  if (e.which === 13) {
    const input = e.currentTarget.value;
    const currentPrice = parseInt(priceInput.val());

    const tradeInValidityResult = tradeInValidityChecker(input, currentPrice);

    // if input is valid, update other fields
    // else create error message
    if (tradeInValidityResult === 0) {
      fadeInputBoxOutline(tradeInPercentBox);
      fadeInputBoxOutline(tradeInValueBox);

      tradeInInput.val(input);
      const tradeInValue = parseInt(input);

      updateTradeInPercentageValue(tradeInValue, currentPrice);
    } else {
      createInvalidTradeInMessage(tradeInValidityResult, currentPrice);
    }
  }
});

// Trade-in Percentage input box
percentInput.on("input", (e) => {
  checkAndRemoveTradeInErrMessages();
});

percentInput.keypress( (e) => {
  if (e.which === 13) {
    const input = e.currentTarget.value;
    const currentPrice = parseInt(priceInput.val());

    const percentValidityResult = percentageValidityChecker(input, currentPrice);

    // if input is valid, update other fields
    // else create error message
    if (percentValidityResult === 0) {
      fadeInputBoxOutline(tradeInPercentBox);
      fadeInputBoxOutline(tradeInValueBox);

      percentInput.val(input);
      const percent = parseInt(input) / 100;
      updateTradeInInputValue(currentPrice, percent);
    } else {
      createInvalidPercentageMessage(percentValidityResult);
    }
  }
});
