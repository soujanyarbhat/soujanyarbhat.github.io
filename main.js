$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('below');
        } else {
            $('.navbar').removeClass('below');
            $('ul.navbar-nav > li').removeClass('active');
        }
    });
});

var $root = $('html, body');

$(document).ready(function() {
    "use strict";

    $('ul.navbar-nav > li').click(function(e) {
        $('ul.navbar-nav > li').removeClass('active');
        $(this).addClass('active');
    });

    $('nav a[href^="#"]').click(function() {
        var href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(this.hash).offset().top
        }, 500, function() {
            window.location.hash = href;
        });

        return false;
    });

    $('#interests').on('shown.bs.collapse', function() {
        $root.animate({
            scrollTop: $(".more").offset().top
        }, 'slow');
    });
});