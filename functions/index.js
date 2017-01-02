$(function() {

    //fab-open-function------------------------------------------
    function fabOpen() {
        $('.upload-btn').fadeOut(350)
        $('.fab').addClass('fab-open');
        $('.overlay').fadeIn(700);
        $('.fab-header').addClass('fab-header-open');
        $('h1.fab-title, .close-btn').delay(400).fadeIn();
        $('.form-wrapper').delay(350).fadeIn(0);
        $('body, html').css('overflow', 'hidden');
    }

    //fab-close-function------------------------------------------
    function fabClose() {
        $('.upload-btn').fadeIn(350);
        $('.fab').removeClass('fab-open');
        $('.overlay').fadeOut(400);
        $('.fab-header').removeClass('fab-header-open');
        $('h1.fab-title, .close-btn, .form-wrapper').fadeOut(0);
        $('.button').removeClass('f-btn-off');
        $("#form")[0].reset();
        $('body, html').css('overflow', 'visible');
        $('svg.send-btn').css('display', 'block');
        $('svg.done-btn').css('display', 'none');
        setTimeout(function() {
            $('.fab-header').removeClass('fab-header-badlo');
        }, 400);
    }

    //fab-open--------------------------------------------
    $('.fab').on('click', function() {
        fabOpen();
    });

    //fab-close-------------------------------------------
    $('.overlay, .close-btn').on('click', function() {
        fabClose();
    });

    //nav-menu--------------------------------------------
    $('svg.nav-btn').on('click',function () {
        $('.nav-bar-wrapper').toggleClass('nav-khulgya');
        $('.overlay').fadeToggle(225);
        $('body, html').css('overflow', 'hidden');
    });
    //nav-close-------------------------------------------
    $('.overlay, li.menu-item').on('click',function () {
        $('.nav-bar-wrapper').removeClass('nav-khulgya');
        $('.overlay').fadeOut(225);
        $('body, html').css('overflow', 'visible');
    });

    //search-bar-open----------------------------------------
    $('.search-text-field').on('click',function () {
        $('.search-bar').addClass('search-active');
        $('svg.nav-btn').css('display', 'none');
        $('svg.back-btn').css('display', 'inline-block');
        $('.search-overlay').fadeIn(195);
        $('body, html').css('overflow', 'hidden');
    });
    //search-bar-close----------------------------------------
    $('.search-overlay, svg.back-btn').on('click',function () {
        $('.search-bar').removeClass('search-active');
        $('.search-overlay').fadeOut(195);
        $('svg.nav-btn').css('display', 'inline-block');
        $('svg.back-btn').css('display', 'none');
        $('body, html').css('overflow', 'visible');
    });

    $('li.menu-item').on('click',function () {
        $(this).addClass('menu-item-selected');
        $('li.menu-item').not(this).removeClass('menu-item-selected');
    });

    //chips------------------------------------------
    $('.chips').on('click',function () {
        $(this).addClass('chip-clicked');
        $('.chips').not(this).removeClass('chip-clicked');
    });

    //chip-filter---------------------------------------
    $('.all-chips, .apps-item').on('click',function () {
        $('.card').removeClass('card-hidden');
        $('.card').not('.card').addClass('card-hidden');
    });
    $('.games-chips').on('click',function () {
        $('.card').removeClass('card-hidden');
        $('.card').not('.select-games').addClass('card-hidden');
    });
    $('.ec-chips').on('click',function () {
        $('.card').removeClass('card-hidden');
        $('.card').not('.select-ec').addClass('card-hidden');
    });
    $('.new-chips').on('click',function () {
        $('.card').removeClass('card-hidden');
        $('.card').not('.select-new').addClass('card-hidden');
    });
    $('.trend-chips').on('click',function () {
        $('.card').removeClass('card-hidden');
        $('.card').not('.select-trend').addClass('card-hidden');
    });

    //contact-button-ani----------------------------------
    $('.button').on('click', function() {
        $('.button').addClass('f-btn-off');
        $('.fab-header').addClass('fab-header-badlo');
        // $("#form")[0].reset();
        setTimeout(function() {
            $('svg.send-btn').css('display', 'none');
            $('svg.done-btn').css('display', 'block');
        }, 400);
    });

    //header-------------------------------------------------
    $(window).scroll(function() {
        if ($(window).scrollTop() > 174) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });

    //anchor-for-scrolling-------------------------------------
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
