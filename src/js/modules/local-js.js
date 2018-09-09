const $ = require("jquery"),
isMobile = $(window).outerWidth() < 769 ? true : false;

module.exports = function(){

  //navigation trigger
  if(isMobile){
    //casing variables
    let $nav       = $( '.b-header__nav-mob' ),
        $navBurger = $nav.find('.b-header__nav-mob__burger'),
        $navMenu   = $nav.find('.b-header__nav-mob__menu'),
        $navClose  = $navMenu.find('.close'),
        $navLink   = $nav.find('.b-header__nav-mob__link');

    $navBurger.on('click', function(){
      //click on burger
      $navMenu.slideDown(350);
      $('body').css({overflowY:'hidden'});
    });

    $navClose.on('click', function(){
      //click on close
      $navMenu.slideUp(350);
      $('body').css({ overflowY:'visible' });
    });

    $navLink.on('click', function(){
      //click on link in nav
      let self = $(this);

      if( !( self ).hasClass('active') ){
        $navMenu.find('.b-header__nav-mob__link.active').removeClass('active');
        self.addClass('active');
      }
    });
  }
}
