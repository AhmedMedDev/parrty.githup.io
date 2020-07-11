/* $ */
$(document).ready(function () {
    'use strict';
    //FOR RESPONSIVE NAVBAR
        $('.fa-bars').click(function () {
            $('.nav-links').slideToggle();
        });
    
    //FOR STYLE NAVBAR
            $(window).on("scroll",function(){
                if ($(window).scrollTop() >= 486 && $(window).scrollTop() < 500){
                    $('.nav').css({
                        "height":"0",
                        "opacity":"0"
                    })
                }
            });
            $(window).on("scroll",function(){
                if ($(window).scrollTop() >= 600){
                    $('.nav').css({
                        "height":"50px",
                        "opacity":"1"
                    });
                    $('.nav .container .logo h3').css({
                        "fontSize":"21px",
                        
                    });
                    $('.nav .container ul').css({
                        "marginTop":"-9px",
                        "opacity":"1"
                    });
                    $('.nav .container .logo i').css({
                        "marginTop":"14px",
                        "fontSize":"25px",
                    });
                    $('.nav .container .logo ').css({
                        "paddingTop":"1px",
                        "opacity":"1"
                    })
                    $('.nav .container i.fa-bars ').css({
                        "marginTop":"-12px",
                        "fontSize":"24px"
                    });
                    $('.nav .container .nav-links ').css({
                        "top":"50px"
                    })
                }else if ($(window).scrollTop() <= 400){
                    $('.nav').css({
                        "height":"60px",
                        "opacity":"1"
                    });
                    $('.nav .container .logo h3').css({
                        "fontSize":"27px",
                        
                    });
                    $('.nav .container ul').css({
                        "marginTop":"8px",
                        "opacity":"1"
                    });
                    $('.nav .container .logo i').css({
                        "marginTop":"16px",
                        "fontSize":"30px",
                    });
                    $('.nav .container .logo ').css({
                        "paddingTop":"10px",
                        "opacity":".75"
                    });
                    $('.nav .container i.fa-bars ').css({
                        "marginTop":"auto",
                        "fontSize":"27px"
                    });
                    $('.nav .container .nav-links ').css({
                        "top":"60px"
                    })
                }
            });
    
    //SLIDER LOGO
            $('.slider').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 2,
                autoplay:true,
                autoplaySpeed:1000,
                arrows:false,
                responsive: [
                        {
                            breakpoint: 993,
                            settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                          }
                        },
                        {
                            breakpoint: 769,
                            settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            infinite: true,
                          }
                        },
                        {
                            breakpoint: 577,
                            settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            centerMode: false,
                          }
                        },
                      ]

            });
    //for TESTIMONIAL SEC
            $('.testi-slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                //autoplay:true,
                autoplaySpeed:1000,
                prevArrow:$('.next'),
                nextArrow:$('.prev'),
                centerMode: true,
                responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            infinite: true,
                            centerMode: false,
                          }
                        },
                        {
                            breakpoint: 987.1,
                            settings: {
                            slidesToShow: 1,
                            slidesToScroll: 2,
                            centerMode: true,
                          }
                        },
                        {
                            breakpoint: 767.1,
                            settings: {
                            slidesToShow: 1,
                            slidesToScroll: 2,
                            centerMode: false,
                          }
                        },
                      ]
            });
    
    
    
});