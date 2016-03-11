'use strict';

// carIndexItems to be appended to carsIndex
const carsIndex = $(".cars-index");

// listeners to be added to modify data set and other input elements
const priceInput = $(".price-input"),
  tradeInInput = $(".trade-in-input"),
  percentInput = $(".trade-in-percent");

// slider elements
const priceSlider = $(".purchase-price-slider-bar");
const priceSliderMarker = $(".slider-marker.purchase-price");

const tradeInSlider = $(".trade-in-value-slider-bar");
const tradeInSliderMarker = $(".slider-marker.trade-in-value");

// elements where error messages will be prepended to
const priceInputWrapper = $(".price-input-wrapper");
const tradeInValueWrapper = $(".trade-in-value-wrapper");
