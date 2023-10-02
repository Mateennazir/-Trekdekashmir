$(document).ready(function () {
    "use strict";
    //PRE LOADING
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    //RESPONSIVE MENU BUTTON
    $(".menu-book i").on("click", function () {
        $(".menu").toggleClass("menuact");
    });


    //DESTINATION FEATURES ANIMATION
    $('.plac-feature li').addClass("mani-li");

    //HOME BANNER ANIMATION
    $('.home-head h1').addClass("animation-1");

    $('.search').addClass("animation-3");

    //HOME BANNER ANIMATION ICONS AND IMG
    $('.banner-right-im img').addClass("img-ani")
    $(".banner-ani-icon i").addClass("ani1")
    $(".banner-ani-icon .midd-icon").addClass("ani2")
    $(".banner-ani-icon span").addClass("ani3")
    $(".banner-ani-icon .icon-an").addClass("ani4")

    //ABOUT US ANIMATION
    $(".common-banner h2").addClass("abt-ani");
    $(".common-banner h4").addClass("abt-a-ani");
    $(".common-banner i").addClass("fly-any");

    //ABOUT US BANNER ANI
    $(".comm-ban-im img").addClass("ab-ban")

    //PACKAGES DATILES ANIMATION
    $(".package-deatiles h2").addClass("pack-det-ani");
    $(".package-rating").addClass("rating-ani");
    $(".pack-det-icon").addClass("pack-icon-ani");
    $(".detailes-traveller").addClass("detailes-traveller-ani");
    $(".book-btn-pack").addClass("bk-btn-ani");

    //ABOUT US  NUMBER COUNTER
    $('.count').each(function () {
        $(this).prop('Counter', 1090).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });




    //ON WINDOW SCROOL FUNCTION
    $(window).on("scroll", function () {

        //COMMON VARIABLE FOR WINDOW SCROLL
        var _topval = $(window).scrollTop();

        //MENU FIXED ACTIVE

        if (_topval >= 150) {
            $(".menu-head").addClass("fix-menu");
        } else {
            $(".menu-head").removeClass("fix-menu");
        }

        //GO TO TOP BUTTON
        if (_topval >= 400) {
            $(".go-to-top").addClass("act");
        } else {
            $(".go-to-top").removeClass("act");
        }

        $('#scrolltop').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });


        //ALL SECTION COMM-ANIMATION
        if ($(".ani-eql").length > 0) {
            $(".ani-eql").each(function () {
                var _seccom = $(this).offset().top + $(this).outerHeight() - 350;
                var _window = $(window).scrollTop() + $(window).height();
                if (_window >= _seccom) {
                    $(this).addClass("ani-strt");
                }

            })

            //ALL SECTION TITLE COMM-ANIMATION
            $(".comm-tit-ani").each(function () {
                var _tit1 = $(this).offset().top + $(this).outerHeight() - 50;
                var _titcom = $(window).scrollTop() + $(window).height();
                if (_titcom >= _tit1) {
                    $(this).addClass("ani-tit");
                }

            })


        }


    });



    //GOOGLE MAP - SCROLL REMOVE
    $(".contact-map")
        .on('click', function () {
            $(this).find("iframe").addClass("clicked")
        })
        .on('mouseleave', function () {
            $(this).find("iframe").removeClass("clicked")
        });


    //TAB ACTIVE ANIMATION
    $(".tab-head ul li span").on("click", function () {
        $(".tab-head ul li span").removeClass("act");
        $(this).addClass("act");
        var _tab = $(this).attr("id");
        $(".fav-pack").hide();
        $("#" + _tab + "_view").show();
    });

    //SEARCH BAR 
    $(".bann-search").on("click", function () {
        $(".tour-typ").addClass("type");

        //SEARCH BAR REMOVE CLASS
        $(".search").mouseleave(function () {
            $(".tour-typ").removeClass("type");
        })
    });

    //SEARCH BAR TOUR TYPE
    $(".tour-typ .item").on("click", function () {
        var _tt = $(this).text();
        $(".bann-search").val(_tt);
    })


    //SEARCH  BAR ONE CLICK ADD
    $(".tour-typ .item").on("click", function () {
        $(".tour-typ.type").addClass("active");
    })

    //SEARCH  BAR ONE CLICK ADD
    $(".search .bann-search").on("click", function () {
        $(".tour-typ.type").removeClass("active");
    })


    //tab click
    $(".book-fav-pack a").on("click", function () {
        var _booknow = $(this).parent().siblings("h2").text();
        $(".book-tit").text(_booknow);
    });

    //POP UP IMG CHANGE
    $(".book-fav-pack a").on("click", function () {
        var _bimg = $(this).parents().closest(".fav-pack").children().find("img").attr("src");
        $(".pop-im").attr("src", _bimg);
    })

    //ADD SUB MENU
    $(".add-menu .drop-dowe").mouseover(function () {
        $(".sub-menu").addClass("typ-menu");
    })

    //REMOVE SUB MENU
    $(".add-menu").mouseleave(function () {
        $(".sub-menu").removeClass("typ-menu");
    })


    //SIDE BAR
    $(".click-sid-bar i").on("click", function () {
        $(".side-bar").addClass("act");
    })

    //SIDE BAR REMOVE
    $(".side-bar-im i").on("click", function () {
        $(".side-bar").removeClass("act");
    })

    // TOP SEARCH BOX ADD
    $(".cl-func span").on("click", function () {
        $(".top-cl-fun").addClass("act");
    })

    // TOP SEARCH BOX REMOVE
    $(".top-cl-fun span").on("click", function () {
        $(".top-cl-fun").removeClass("act");
    })

    //TOP SEARCH BAR
    $(".top-click-1 h3").on("click", function () {
        $(".all-cate").addClass("act");
    })

    //TOP SEARCH BAR REMOVE
    $(".top-click-1").mouseleave(function () {
        $(".all-cate.act").removeClass("act");
    })

    //BANNER SEARCH BOX
    $(".bann-search").on("click", function () {
        $(".travl-features").addClass("act");
    })

    //REMOVE BANNER SEARCH BOX
    $(".search").mouseleave(function () {
        $(".travl-features").removeClass("act");
    })

    //ADD SUB MENU & REMOVE
    $(".add-menu .arrow1").on("click", function () {
        $(".sub-menu.typ-menu").toggleClass("menuact");
    })

    //FAQ CLICK FUNCTION
    $(".faq-rhs ul li h3").on("click", function () {
        $(".faq-rhs p").slideUp(500);
        $(this).siblings(".faq-rhs p").slideDown(500);
        $(".faq-rhs ul li h3").removeClass("act");
        $(this).addClass("act");
    })


    // Gallery image hover
    $(".img-wrapper").hover(
        function () {
            $(this).find(".img-overlay").animate({
                opacity: 1
            }, 600);
        },
        function () {
            $(this).find(".img-overlay").animate({
                opacity: 0
            }, 600);
        }
    );

    // Lightbox
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $prevButton = $('<div id="prevButton"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>');
    var $nextButton = $('<div id="nextButton"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>');
    var $exitButton = $('<div id="exitButton"> <i class="fa fa-times" aria-hidden="true"></i></div>');

    // Add overlay
    $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $("#gallery").append($overlay);

    // Hide overlay on default
    $overlay.hide();

    // When an image is clicked
    $(".img-overlay").click(function (event) {
        event.preventDefault();
        var imageLocation = $(this).prev().attr("href");
        $image.attr("src", imageLocation);
        $overlay.fadeIn("slow");
    });

    // When the overlay is clicked
    $overlay.click(function () {
        $(this).fadeOut("slow");
    });

    // When next button is clicked
    $nextButton.click(function (event) {
        $("#overlay img").hide();
        var $currentImgSrc = $("#overlay img").attr("src");
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        var $nextImg = $($currentImg.closest(".plac-gal-imag").next().find("img"));
        var $images = $("#image-gallery img");
        if ($nextImg.length > 0) {
            $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        } else {
            $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
        }
        event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function (event) {
        $("#overlay img").hide();
        var $currentImgSrc = $("#overlay img").attr("src");
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        var $nextImg = $($currentImg.closest(".plac-gal-imag").prev().find("img"));
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        event.stopPropagation();
    });

    $exitButton.click(function () {
        $("#overlay").fadeOut("slow");
    });


});