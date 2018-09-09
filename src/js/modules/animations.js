const $ = require('jquery'),
      isMobile = $(window).outerWidth() < 769 ? true : false;
module.exports = function(){
  //cash var
  let redStripe  = $('.c-reveal--red'),
      grayStripe = $('.c-reveal--gray'),
      statsSlide = $('.b-stats__slide');
      flyUp = $('.fly-up'),
      lizingImg = $('.b-liz__media__img'),
      lizingRedStripe = $('.c-reveal--red-liz'),
      lizingImgReveal = $('.c-reveal--gray-liz'),
      lizingTxt = $('.b-liz__intro');

  // init controller
  var controller = new ScrollMagic.Controller();

  var tlOnePlace = new TimelineLite();
  //time line for .b-one-place
  tlOnePlace.to( redStripe, 0.8, {x:105+'%',} )
       .to( grayStripe, 0.6, {autoAlpha:0}).delay(0.2);

 // build a scene
 var sceneOnePlace = new ScrollMagic.Scene({
   triggerElement: '.b-one-place',
   reverse:false,
   triggerHook: 0.7,
 })
 .setTween(tlOnePlace) // trigger a TweenMax.to tween
 .addTo(controller);

//SCENE FOR LIZING
  var tlLiz = new TimelineMax();
  //time line for .b-liz
  tlLiz.to( lizingImgReveal, 0.8, {x:-105+'%'} )
       .from( lizingTxt, 0.6, {autoAlpha: 0, y:'+=25'} ).delay(0.2);

 // build a scene
 var sceneOnePlace = new ScrollMagic.Scene({
   triggerElement: '.c-reveal--gray-liz',
   reverse:false,
   triggerHook: 0.7,
 })
 .setTween(tlLiz) // trigger a TweenMax.to tween
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
    triggerHook: 0.7,
  })
  .setTween(tween) // trigger a TweenMax.to tween
  .addTo(controller);
})

$(flyUp).each(function(index) {
  //scene for all elements tahat have fly in class
  let self = $(this);

  var tween = TweenMax.from(
    self,
    0.6,
    {autoAlpha: 0,
      y:'+=25',
      ease:Linear.easeNone,
    });

  // build a scene
  var sceneStat = new ScrollMagic.Scene({
    triggerElement: this,
    reverse:false,
    triggerHook: 0.9,
  })
  .setTween(tween) // trigger a TweenMax.to tween
  .addTo(controller);
})

//RED STRIP ON LIZING
var twRedStrip = TweenMax.from(
  lizingRedStripe,
  0.35,
  {width:0,  ease:Linear.easeNone});

// build a scene
var sceneRedLizingStripe = new ScrollMagic.Scene({
  triggerElement: '.c-reveal--red-liz',
  reverse:false,
  triggerHook: 0.9,
})
.setTween(twRedStrip) // trigger a TweenMax.to tween
// .addIndicators({
//   name: 'REDLIZ',
//   colorTrigger: 'black',
//   indent: 200,
//   colorStart: '#75C695'
// })
.addTo(controller);
}
