const $ = require('jquery'),
      isMobile = $(window).outerWidth() < 769 ? true : false;
      module.exports = function(){
  //cash var
  let redStripe  = $('.c-reveal--red'),
      grayStripe = $('.c-reveal--gray'),
      statsSlide = $('.b-stats__slide');

  // init controller
  var controller = new ScrollMagic.Controller();

  var tlRed = new TimelineLite();
  tlRed.to( redStripe, 0.8, {x:105+'%',} )
       .to( grayStripe, 0.6, {autoAlpha:0} );

 // build a scene
 var sceneOnePlace = new ScrollMagic.Scene({
   triggerElement: '.b-one-place',
   reverse:false,
   triggerHook: 0.5,
 })
 .setTween(tlRed) // trigger a TweenMax.to tween
 .setClassToggle('yuo')
 .addIndicators({
		name: 'ONE PLACE',
		colorTrigger: 'black',
		indent: 200,
		colorStart: '#75C695'
	}) // this requires a plugin
 .addTo(controller);

$(statsSlide).each(function(index) {
  //scene for STATS elements
  let self = $(this),
      num  = self.find('.numbers'),
      initial = num.text();

  var tween = TweenMax.from(
    self,
    0.8,
    {autoAlpha: 0,
      y:'+=25',
      ease:Linear.easeNone,
      onUpdate:function(){
        console.log();
        num.text(Math.floor(Math.random() * 10) )
      },
      onComplete:function(){ num.text( initial )},
      delay:index/10,
    });

  // build a scene
  var sceneStat = new ScrollMagic.Scene({
    triggerElement: '.b-stats',
    reverse:false,
    triggerHook: 0.5,
  })
  .setTween(tween) // trigger a TweenMax.to tween
  .addIndicators({
 		name: 'STATS',
 		colorTrigger: 'black',
 		indent: 200,
 		colorStart: '#75C695'
 	})
  .addTo(controller);
})

}
