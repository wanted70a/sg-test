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
        $navLink   = $nav.find('.b-header__nav-mob__link'),
        $footerNav = $('.b-footer__nav'),
        $footerNavItems = $footerNav.find('.b-footer__nav__item');

    $navBurger.on('click', function(){
      //click on burger
      $navMenu.slideDown(350);
      $('body').css({overflowY:'hidden'});
    });

    $navClose.on('click', function(){
      //click on close main menu
      $navMenu.slideUp(350);
      $('body').css({ overflowY:'visible' });
    });

    $navLink.on('click', function(){
      //click on link in nav in main menu
      let self = $(this);

      if( !( self ).hasClass('active') ){
        $navMenu.find('.b-header__nav-mob__link.active').removeClass('active');
        self.addClass('active');
      }
    });

    //FOOTER NAV ON MOBILE
    $footerNavItems.on('click', function(){
      let self = $(this),
          dropDown = self.find('.b-footer__nav__item__links');
          if(!dropDown.hasClass('open') ){
            $footerNav.find('.b-footer__nav__item__links.open').removeClass('open').slideUp(300);
            dropDown.addClass('open').slideDown(300);
          }else{

          }
    })
  }else{
    //if desktop
    let $next = $('.c-btn--next'),
        $bStatsPxFromTop = $('.b-stats').offset().top;

    $next.on('click', function(){
      //scroll to next section
      $('html, body').animate({
          scrollTop: $bStatsPxFromTop
      }, 500);
    });
  }

  //for mob and desk
  //cashing variables
  var lastScrollTop = 0,
      $header  = $('header'),
      $navDesk = $('.b-header__nav-desk');

  $(window).scroll(function(event){
    //toggle navigation states on scroll
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
         // downscroll code
         if(st > 50){
           $header.slideUp(300);
         }
     } else {
        // upscroll code
        $header.slideDown(300, function(){
          if(st > 50){
            $navDesk.addClass('white');
          }else{
            $navDesk.removeClass('white');
          }
        })
     }
     lastScrollTop = st;
  });
}
