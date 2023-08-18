console.log('hello world!');

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: '.Magic'})

.setClassToggle('.Magic', 'show')
.addTo(Controller);
