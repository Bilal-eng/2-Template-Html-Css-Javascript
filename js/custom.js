$(function(){

    'use strict';

    // Adjust Header Height

    var myHeader = $('.header'),

        mySlider = $('.bxslider');

    myHeader.height($(window).height());

    $(window).resize(function(){

        myHeader.height($(window).height());

        // Adjust Bxslider List Item Center

        mySlider.each(function(){

            $(this).css('paddingTop', 
    
            ($(window).height() - $('.bxslider li').height()) / 2 
            );
        });

    });

    // Links Add Active Class

    $('.links li a').click(function(){

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Adjust Bxslider List Item Center

    mySlider.each(function(){

        $(this).css('paddingTop', 

        ($(window).height() - $('.bxslider li').height()) / 2 
        );
    });

    // Trigger The Bx Slider

    mySlider.bxSlider({

        pager: false
    });

    // Smooth Scroll To Div

    $('.links li a').click(function(){

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

    });

    // Our Auto Slider Code

    (function autoSlider() {

        $('.slider .active').each(function(){

            if(!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();
                });
            
            } else {

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();
                });
            }

        });

    }());

    // Trigger MixitUp

    window.mixitup('#Container');

    $('.shuffle li').click(function() {

        $(this).addClass('selected').siblings().removeClass('selected');

    });

    // Trigger NiceScroll

    $('html').niceScroll({

        cursorcolor: '#1ABC9C',

        cursorwidth: '10px',

        cursorborder: '1px solid #1ABC9C',

        cursorborderradius: '0'
    });

});