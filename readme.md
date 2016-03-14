# Awesome cars site

The static page is hosted here: [Live][live]

[live]: http://www.ephraimpei.com/awesome-cars

Alternatively, you can also clone this repo and then open the [`index.html`](./index.html) file in your browser.

## Summary

This is an exercise to create a static page with the provided [`awesomecarsite-1x.png`](./awesomecarsite-1x.png) design mock up. In addition, it needs to meet the following specifications/assumptions:

* The user should be able to interact with the sliders and text fields, and the other information on the screen should update accordingly.
* Assume there may be 100s of results.
* The page should be responsive to mobile, tablet, and desktop devices. Portrait and landscapes are also supported.

### How to use

To update the page with new results, use the provided form:
* Enter purchase price and hit the ENTER key (it won't work unless you use the Enter key)!
* Use the sliders to adjust the purchase price. The new data won't load until the drag event stops.
* Trade in value updates automatically after updating the purchase price.

To update the trade in value, also use the provided form:
* Enter trade in value or trade in percent and, once again, hit the ENTER key!
* Updating trade in value automatically recalculates the trade in percent
* Likewise, updating the trade in percent automatically updates the trade in value
* You can use the trade in percent slider to adjust the percent too, which also automatically updates the trade in value.

### Languages

* JavaScript
* HTML5/CSS3
* SASS

### Libraries

* jQuery
* jQuery - UI
* Babel

### Decisions and challenges

* Since the assumption was that there was a lot of data but an unknown number of data elements, I treated the data as if it were a stream.  Data would be loaded from the stream in batches of 12 up to an arbitrary number of 100 (but in reality until the stream is empty).
* I implemented the 'infinite scroll' to load additional data when the user scrolls to the bottom of the page
* Basic error handling was implemented into the car options form to ensure the user is providing a number value within the correct range (ie: when inputting trade in value, can't input a number greater than the current purchase price).
* I used jQuery UI's slider instead of building my own since it didn't make sense to "re-invent the wheel" especially for something more complicated like sliders. I tried to style it just like the mock up, however I ran into bugs with the sliding functionality (particularly when the size of the sliding marker was adjusted).  Rather than spending an enormous amount of time to debug jQuery UI, I used most of jQuery UI's base styling with the exception of adding the colors provided from the specifications.
* Another issue with jQuery UI is that the sliders don't work as expected on touch devices (sliding doesn't work).  I used a library which essentially patches the component to process the event as expected.
* Lastly, I used Babel to compile my javascript into cross browser compatible files (they are primarily written in ES6 which isn't universally supported).
