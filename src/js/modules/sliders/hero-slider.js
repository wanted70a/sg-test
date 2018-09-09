const $ = require('jquery'),
    slick = require('slick-carousel');
    isMobile = $(window).outerWidth() < 769 ? true : false;
module.exports = function(){
  //cashing variables
  let $sliderWrap = $('.b-hero'),
      $slider = $sliderWrap.find('.b-hero__slider'),
      $controlLeft = $sliderWrap.find('.l'),
      $controlRight = $sliderWrap.find('.r');
      // On before slide change

  $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: true,
      arrows: false,
      autoplay: false,
      infinite: true,
      accessibility: false,
      arrows: true,
      nextArrow: $controlRight,
      prevArrow: $controlLeft,
  });
}
