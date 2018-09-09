//requrie modules and store them in vars
var heroSlider =  require('./modules/sliders/hero-slider.js');
var statsSlider =  require('./modules/sliders/stats-slider.js');
var localJS =  require('./modules/local-js.js');


//cal modules
window.app = {}
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
  heroSlider();
  statsSlider();
  localJS();
 });
