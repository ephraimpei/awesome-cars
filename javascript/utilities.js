'use strict';

// Fisher Yates shuffle
Array.prototype.shuffle = function () {
  let currentIndex = this.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }

  return this;
}

// fades in and out a blue border around input box argument
// lets users know he/she just made a valid form submission
const fadeInputBoxOutline = (inputBox) => {
  inputBox.addClass("on-enter");
  setTimeout(() => inputBox.removeClass("on-enter"), 500);
};
