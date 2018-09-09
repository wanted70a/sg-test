//requrie modules and store them in vars
const heroSlider =  require('./modules/sliders/hero-slider.js');
const statsSlider =  require('./modules/sliders/stats-slider.js');
const localJS =  require('./modules/local-js.js');
const anim    =  require('./modules/animations.js');

//cal modules
window.app = {}
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
  heroSlider();
  statsSlider();
  localJS();
  anim();
 });
