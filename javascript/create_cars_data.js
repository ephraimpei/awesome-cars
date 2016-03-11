'use strict';

const createDataSet = (n) => {
  const dataSetSize = n, maxPrice = 100000, minPrice = 10000;

  // create an array from 0 to dataSetSize
  const dataSetArray = Array.apply(0, Array(dataSetSize)).map( (undefined, idx) => idx );
  const carColors = ["black", "blue", "green", "red", "silver", "yellow"];

  // create the cars data set w/ functional programming techniques :)
  const carsDataSet = dataSetArray.map( (n) => {
    const color = carColors[(n % carColors.length)];
    const name = `${ color } car`;
    const imageURL = `./images/image-car-${ color }-2x.png`;
    const price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    const priceUSDFormat = "$" + price.toLocaleString();

    return {
      id: n,
      color: color,
      name: name,
      imageURL: imageURL,
      price: price,
      priceUSDFormat: priceUSDFormat
    };
  });

  return carsDataSet;
};
