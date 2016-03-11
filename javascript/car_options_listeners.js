'use strict';

const getNewData = (price) => {
  $(".car-index-item").remove();
  const carDataSet = createDataSet(12, price);
  const carIndexItems = createCarIndexItems(carDataSet);
  carsIndex.append(carIndexItems);
};

const updateTradeInInputValue = (price) => {
  const tradeInPercent = parseInt(percentInput.val()) / 100;
  const updatedTradeInValue = price * tradeInPercent;

  // round trade in value to 2 decimal places
  tradeInInput.val(Math.round(updatedTradeInValue * 100) / 100)
};

const updatePriceSlider = (price) => {
  priceSlider.val(price);
  priceSliderMarker.css("left", Math.floor((price / 100000) * 100) + "%");
};

priceInput.keypress( (e) => {
  // remove error message if it is there
  if ($(".invalid-price-message").show()) {
    $(".invalid-price-message").remove();
  }

  if (e.which === 13) {
    const input = e.currentTarget.value;
    const priceValidityResult = priceValidityChecker(input);

    // if input is valid, create (fetch) new content
    // else create error message
    if (priceValidityResult === 0) {
      priceInput.val(input);
      const price = parseInt(input);

      updateTradeInInputValue(price);
      updatePriceSlider(price);
      getNewData(price);
    } else {
      createInvalidPriceMessage(priceValidityResult);
    }
  }
});
