'use strict';

const initDataSetSize = 12;
const initDataSet = createDataSet(initDataSetSize, parseInt(priceInput.val()));

const carsIndexItems = createCarIndexItems(initDataSet);

carsIndex.append(carsIndexItems);
