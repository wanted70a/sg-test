//requrie modules and store them in vars
const heroSlider =  require('./modules/sliders/hero-slider.js');
const statsSlider =  require('./modules/sliders/stats-slider.js');
const localJS =  require('./modules/local-js.js');
const anim    =  require('./modules/animations.js');
const picturefill = require('./vendor/picturefill.js')

//cal modules
picturefill();
window.addEventListener("load", function(event) {
  heroSlider();
  statsSlider();
  localJS();
  anim();
 });
