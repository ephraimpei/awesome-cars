'use strict';

const createCarIndexItems = (carDataSet) => {
  return carDataSet.map( (car) => {
    // create carIndexItem container
    let carIndexItem = $(document.createElement("div"));
    carIndexItem.addClass("car-index-item");

    let name = $(document.createElement("label"));
    name.addClass("car-index-item-name");
    name.html(car.name);

    let price = $(document.createElement("label"));
    price.addClass("car-index-item-price");
    price.html(car.priceUSDFormat);

    let image = $(document.createElement("img"));
    image.addClass("car-index-item-img");
    image.attr("src", car.imageURL);

    carIndexItem.append(name, price, image);

    return carIndexItem;
  });
};
