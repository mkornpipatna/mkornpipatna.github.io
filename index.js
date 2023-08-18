// Import ScrollMagic library
import ScrollMagic from 'scrollmagic';

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
  duration: 1400, //scroll distance for scene
  offset: 900 //start this scene after scrolling for offset
})
.setPin("#some-div") //pins the element for the scenes duration
.addTo(controller);