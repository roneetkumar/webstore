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

    //nav-open-function------------------------------------------
    function navOpen() {
        $('.nav-bar-wrapper').toggleClass('nav-khulgya');
        $('.overlay').fadeIn(225);
        $('body, html').css('overflow', 'hidden');
    }

    //nav-close-function------------------------------------------
    function navClose() {
        $('.nav-bar-wrapper').removeClass('nav-khulgya');
        $('.overlay').fadeOut(225);
        $('body, html').css('overflow', 'visible');
        bugListClose();
    }

    //search-open-function------------------------------------------
    function searchOpen() {
        $('.search-bar').addClass('search-active');
        $('svg.nav-btn').css('display', 'none');
        $('svg.back-btn').css('display', 'inline-block');
        $('.search-overlay').fadeIn(195);
        $('body, html').css('overflow', 'hidden');
    }

    //search-close-function------------------------------------------
    function searchClose() {
        $('.search-bar').removeClass('search-active');
        $('.search-overlay').fadeOut(195);
        $('svg.nav-btn').css('display', 'inline-block');
        $('svg.back-btn').css('display', 'none');
        $('body, html').css('overflow', 'visible');
    }

    function bugListClose() {
        $('li.bug-list').removeClass('menu-item-selected');
        $('li.bug-list-opt').fadeOut(0);
        $('li.apps-item').addClass('menu-item-selected');
    }

    //fab-open--------------------------------------------
    $('.fab').on('click', function() {
        fabOpen();
    });

    //fab-close-------------------------------------------
    $('.overlay, .close-btn').on('click', function() {
        fabClose();
    });

    //nav-open----------------------------------------
    $('svg.nav-btn').on('click',function () {
        navOpen();
    });

    //nav-close----------------------------------------
    $('.overlay,li.menu-item').on('click',function () {
        navClose();
    });

    //about-open---------------------------------------
    $('.about,.support,.faq').on('click',function () {
        $('.nav-bar-wrapper').removeClass('nav-khulgya');
        bugListClose();
    });

    $('.about').on('click',function () {
        $('.about-wrapper').addClass('info-show');
    });

    $('.support').on('click',function () {
        $('.support-wrapper').addClass('info-show');
    });

    $('.faq').on('click',function () {
        $('.faq-wrapper').addClass('info-show');
    });

    //about-close---------------------------------------
    $('.info-wrapper').on('click',function () {
        $('.info-wrapper').removeClass('info-show');
        navClose();
    });

    //search-bar-open----------------------------------------
    $('.search-text-field').on('click',function () {
        searchOpen();
    });

    //search-bar-close----------------------------------------
    $('.search-overlay, svg.back-btn').on('click',function () {
        searchClose();
    });

    //nav-list-selection--------------------------------------------------
    $('li.apps-item, li.bug-list').on('click',function () {
        $('li.apps-item, li.bug-list').addClass('menu-item-selected');
        $('li.bug-list, li.apps-item').not(this).removeClass('menu-item-selected');
    });

    //nav-bug-list-----------------------------------------------
    $('li.bug-list').on('click',function () {
        $('li.bug-list-opt').toggle();
    });

    //chips-selection-----------------------------------------
    $('.chips').on('click',function () {
        $(this).addClass('chip-clicked');
        $('.chips').not(this).removeClass('chip-clicked');
    });

    //chip-filter---------------------------------------

    var card = $('.card');

    $('.all-chips, .apps-item').on('click',function () {
        card.not('.card').addClass('card-hidden');
        $('.all-chips').addClass('chip-clicked');
        $('.chips').not('.all-chips').removeClass('chip-clicked');
    });

    $('.all-chips, .apps-item, .games-chips, .ec-chips, .news-chips, .trend-chips, .tools-chips').on('click',function () {
        card.removeClass('card-hidden');
    });

    $('.games-chips').on('click',function () {
        card.not('.select-games').addClass('card-hidden');
    });
    $('.ec-chips').on('click',function () {
        card.not('.select-ec').addClass('card-hidden');
    });
    $('.news-chips').on('click',function () {
        card.not('.select-news').addClass('card-hidden');
    });
    $('.trend-chips').on('click',function () {
        card.not('.select-trend').addClass('card-hidden');
    });
    $('.tools-chips').on('click',function () {
        card.not('.select-tools').addClass('card-hidden');
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
        setTimeout(function() {
            fabClose();
        }, 1200);
    });
    //event.stopPropagation---------------------------------------------------
    $(".info-wrapper").children().on('click',function(event){
        event.stopPropagation();
    });

    $(".fab-header-wrapper").children().on('click',function(event){
        event.stopPropagation();
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
