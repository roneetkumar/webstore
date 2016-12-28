$(function() {

    //header
    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $('.search-bar').addClass('search-fixed');
        } else {
            $('.search-bar').removeClass('search-fixed');
        }
        if ($(window).scrollTop() > 174) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });

    //anchor for scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});
