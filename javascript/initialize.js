'use strict';

// create initial data set
window.noMoreData = false;
const batchDataSize = 12;
const maxDataSize = 40;
const initDataSet = createDataSet(batchDataSize, parseInt(priceInput.val()));

carsIndex.append(createCarIndexItems(initDataSet));

// add click handler to Load More button
loadMoreButton.click( (e) => {
  e.preventDefault();

  // disable load more button if max data size reached
  if ($(".car-index-item").length > maxDataSize) {
    noMoreDataHandler();
  }

  createDataSet(batchDataSize, parseInt(priceInput.val()));

  carsIndex.append(createCarIndexItems(initDataSet));
});

// add click handler to mobile menu icon
mobileMenuIcon.click( (e) => {

});
