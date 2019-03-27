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


});