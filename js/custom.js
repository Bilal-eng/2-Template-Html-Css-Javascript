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

    $('.links li').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

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

});