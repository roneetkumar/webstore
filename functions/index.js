$(function() {

    // Function-for-alphabatical-order-------------------------------
    $(function() {
        $.fn.sortList = function() {
            var list = $(this);
            var items = $("li", list).get();
            items.sort(function(a, b) {
                var listItem1 = $(a).text().toUpperCase();
                var listItem2 = $(b).text().toUpperCase();
                return (listItem1 < listItem2) ? -1 : 1;
            });
            $.each(items, function(i, itm) {
                list.append(itm);
            });
        }
        $("ul#grid-wrapper").sortList();
    });

    $(window).on("load", function() {
        //chip-width-----------------------------------------------
        var width = 0;
        $('.chips').each(function() {
            width += $(this).outerWidth(true);
        });
        $('ul.chips-list').css('width', width);
    });



    //nav-open-function------------------------------------------
    function navOpen() {
        $('.nav-bar-wrapper').toggleClass('nav-khulgya');
        $('.nav-overlay').fadeIn(225);
        $('html').css('overflow', 'hidden');
    }

    //nav-close-function------------------------------------------
    function navClose() {
        $('.nav-bar-wrapper').removeClass('nav-khulgya');
        $('.nav-overlay').fadeOut(225);
        $('html').css('overflow', 'visible');
        bugListClose();
    }

    //search-open-function------------------------------------------
    function searchOpen() {
        $('.search-bar').addClass('search-active');
        $('svg.nav-btn').css('display', 'none');
        $('svg.back-btn').css('display', 'inline-block');
        $('.search-overlay').fadeIn(195);
        $('html').css('overflow', 'hidden');
    }

    //search-close-function------------------------------------------
    function searchClose() {
        $('.search-bar').removeClass('search-active');
        $('.search-overlay').fadeOut(195);
        $('svg.nav-btn').css('display', 'inline-block');
        $('svg.back-btn').css('display', 'none');
        $('html').css('overflow', 'visible');
    }

    function bugListClose() {
        $('li.bug-list').removeClass('menu-item-selected');
        $('li.bug-list-opt').fadeOut(0);
        $('li.apps-item').addClass('menu-item-selected');
    }


    //nav-open----------------------------------------
    $('svg.nav-btn').on('click', function() {
        navOpen();
    });

    //nav-close----------------------------------------
    $('.nav-overlay,li.menu-item').on('click', function() {
        navClose();
    });

    //about-open---------------------------------------
    $('.about,.support,.faq').on('click', function() {
        $('.nav-bar-wrapper').removeClass('nav-khulgya');
        bugListClose();
    });

    $('.about').on('click', function() {
        $('.about-wrapper').addClass('info-show');
    });

    $('.support').on('click', function() {
        $('.support-wrapper').addClass('info-show');
    });

    $('.faq').on('click', function() {
        $('.faq-wrapper').addClass('info-show');
    });

    //about-close--------------------------------------------------------
    $('.info-wrapper').on('click', function() {
        $('.info-wrapper').removeClass('info-show');
        navClose();
    });

    //search-trending-list-input-fill-----------------------------------
    $('.search-trending-list-item').on('click', function() {
        var listInput = $(this).find('h1').html();
        $('#myinput').val(listInput);
    });

    //search-input-value-reset-------------------------------------------
    $('svg.search-close-btn').on('click', function() {
        $('input.search-text-field').val('');
        card.removeAttr('style');
        $('svg.search-btn').css('display', 'inline-block');
        $('svg.search-close-btn').css('display', 'none');
    });

    //search-bar-open-and-close--------------------------------------
    $('.search-text-field, svg.search-btn,.search-overlay, svg.back-btn').on('click', function() {
        if ($('.search-bar').hasClass('search-active') && $('#myinput').val() != '') {
            searchClose();
            searchFunction();
            $('svg.search-btn').css('display', 'none');
            $('svg.search-close-btn').css('display', 'inline-block');
        } else if ($('.search-bar').hasClass('search-active') && $('#myinput').val() === '') {
            searchClose();
            // searchFunction();
        } else {
            searchOpen();
            $('svg.search-btn').css('display', 'inline-block');
            $('svg.search-close-btn').css('display', 'none');
        }
    });

    //nav-list-selection--------------------------------------------------
    $('li.apps-item, li.bug-list').on('click', function() {
        $('li.apps-item, li.bug-list').addClass('menu-item-selected');
        $('li.bug-list, li.apps-item').not(this).removeClass('menu-item-selected');
    });

    //nav-bug-list-----------------------------------------------
    $('li.bug-list').on('click', function() {
        $('li.bug-list-opt').toggle();
    });

    //chips-selection-----------------------------------------
    $('.chips').on('click', function() {
        $(this).addClass('chip-clicked');
        $('.chips').not(this).removeClass('chip-clicked');
    });

    //chip-filter---------------------------------------
    var card = $('.card');

    $('.all-chips, .apps-item').on('click', function() {
        card.not('.card').addClass('card-hidden');
        $('.all-chips').addClass('chip-clicked');
        $('.chips').not('.all-chips').removeClass('chip-clicked');
    });

    $('.all-chips, .apps-item, .games-chips, .ec-chips, .news-chips, .trend-chips, .tools-chips').on('click', function() {
        card.removeClass('card-hidden');
    });

    $('.games-chips').on('click', function() {
        card.not('.select-games').addClass('card-hidden');
    });
    $('.ec-chips').on('click', function() {
        card.not('.select-ec').addClass('card-hidden');
    });
    $('.news-chips').on('click', function() {
        card.not('.select-news').addClass('card-hidden');
    });
    $('.trend-chips').on('click', function() {
        card.not('.select-trend').addClass('card-hidden');
    });
    $('.tools-chips').on('click', function() {
        card.not('.select-tools').addClass('card-hidden');
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 340) {
            $('.fab').addClass('fab-show');
            // $('.header').addClass('header-fixed');
        } else {
            $('.fab').removeClass('fab-show');
            // $('.header').removeClass('header-fixed');
        }
    });

    //event.stopPropagation---------------------------------------------------
    $(".info-wrapper").children().on('click', function(event) {
        event.stopPropagation();
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

    $('.app-img').Lazy();

});

//search--------------------------------------
function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("grid-wrapper");
    li = ul.getElementsByTagName('li');

    // jo catch ni karte
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// var primaryColorsValues = ['#3F51B5', '#03a9f4', '#673AB7', '#FFEB3B'];
// var primaryColors = primaryColorsValues[Math.floor(Math.random() * primaryColorsValues.length)];
//
// $('.wrapper').each(function() {
//     $('').css('background-color', primaryColors);
//     $('').css('fill', primaryColors);
//     $('').css('color', primaryColors);
// });
//
// var accentColorsValues = ['#FF9100', '#F44336', '#FF5722', '#e91e63'];
// var accentColors = accentColorsValues[Math.floor(Math.random() * accentColorsValues.length)];
//
// $('.wrapper').each(function() {
//     $('').css('background-color',accentColors);
//     $('').css('fill',accentColors);
//     $('').css('color', accentColors);
// });