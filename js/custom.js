$(document).ready(function(){
    
    
    // Scroll To Top
      $.scrollUp();
    
    
  // Bootstrap Carousel
  $('.carousel').carousel({
    interval: 8000
  })
  
    $('#nav').onePageNav();
    $('#nav').slicknav();
    



  // Same Page Linking
  $('.go_top a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
          .animate({scrollTop: targetOffset}, 1500);
        return false;
      }
    }
  });

  // jQuery Stick Menu

  // grab the initial top offset of the navigation
  var sticky_navigation_offset_top = $('#stick_menu').offset().top;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var sticky_navigation = function(){
    var scroll_top = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
    if (scroll_top > sticky_navigation_offset_top) {
      $('#stick_menu').css({ 'position': 'fixed', 'top':0, 'left':0 });
        $("body").css({'padding-top':'50px'});
    } else {
      $('#stick_menu').css({ 'position': 'relative' });
        $("body").css({'padding-top':'0px'});
    }
  };

  // run our function on load
  sticky_navigation();

  // and run it again every time you scroll
  $(window).scroll(function() {
    sticky_navigation();
  });







});
