$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('below');
        } else {
            $('.navbar').removeClass('below');
            $('ul.navbar-nav > li').removeClass('active');
        }
    });
});


$(document).ready(function() {
    "use strict";
  
    $('ul.navbar-nav > li').click(function(e) {
      $('ul.navbar-nav > li').removeClass('active');
      $(this).addClass('active');
    });
});
  