const $ = require('jquery'),
    slick = require('slick-carousel');
    isMobile = $(window).outerWidth() < 769 ? true : false;

module.exports = function(){
  if( !isMobile ){ return; }

  //if is mobile - bwelow this line

  //cashing variables
  let $sliderWrap = $('.b-stats__slider__wrapper'),
      $slider = $sliderWrap.find('.b-stats__slider');
    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        arrows: false,
        autoplay: false,
        infinite: true,
        accessibility: false,
    });
}
