'use strict';

const createDataSet = (n, ceiling) => {
  const dataSetSize = n, maxPrice = ceiling || 100000;

  // create an array from 0 to dataSetSize
  const dataSetArray = Array.apply(0, Array(dataSetSize)).map( (undefined, idx) => idx );

  // colors array is shuffled to get the sense that new data has been fetched
  const carColors = ["black", "blue", "green", "red", "silver", "yellow"].shuffle();

  // create the cars data set w/ functional programming techniques :)
  const carsDataSet = dataSetArray.map( (n) => {
    const color = carColors[(n % carColors.length)];
    const name = `${ color } car`;
    const imageURL = `./images/image-car-${ color }-2x.png`;
    const price = Math.floor(Math.random() * (maxPrice - 1));
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
