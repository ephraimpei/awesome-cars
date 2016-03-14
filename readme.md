# Awesome cars site

To check out the site - clone the repo and then open the [`index.html`](./index.html) file in your browser.

## Summary

This is an exercise to create a static page with the provided [`awesomecarsite-1x.png`](./awesomecarsite-1x.png) design mock up. In addition, it needs to meet the following specifications:

* The user should be able to interact with the sliders and text fields, and the other information on the screen should update accordingly.
* Assume there may be 100s of results.
* The page should be responsive.

### Languages

* JavaScript
* HTML5/CSS3
* SASS

### Libraries

* jQuery
* jQuery - UI

### Decisions

* Since the assumption was that there was a lot of data but an unknown number of data elements, I treated the data as if it were a stream.  Data would be loaded from the stream in batches of 12 up to an arbitrary number of 100 (but in reality until the stream is empty).
* I implemented the 'infinite scroll' to load additional data when the user scrolls to the bottom of the page
* Basic error handling was implemented into the car options form to ensure the user is providing a number value within the correct range (ie: when inputting trade in value, can't input a number greater than the current purchase price).
* I used jQuery UI's slider instead of building my own since it didn't make sense to "re-invent the wheel" especially for something more complicated like sliders. I tried to style it just like the mock up, however I ran into bugs with the sliding functionality (particularly when the size of the sliding marker was adjusted).  Rather than spending an enormous amount of time to debug jQuery UI, I used most of jQuery UI's base styling with the exception of adding the colors provided from the specifications.
