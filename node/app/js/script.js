$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        boolean: false,
        autoplay: 3000,
        responsive:{
            0:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    var owl = $('.owl-carousel');

    $('.slider-arrow-right').click(function() {
        owl.trigger('next.owl.carousel', [300]);
    });
    $('.slider-arrow-left').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });



    var h_hght = 600;
    var h_mrg = 0;

        var elem = $('.header');
        var top = $(this).scrollTop();

        if(top > h_hght){
            $('.header').addClass('header_fixed');
        }

        $(window).scroll(function(){
            top = $(this).scrollTop();
            if (top+h_mrg < h_hght) {
                $('.header').removeClass('header_fixed');
                elem.css('top', (h_hght-top));
            } else {
                $('.header').addClass('header_fixed');
                elem.css('top', h_mrg);
            }
        });



    $(".header_link").mouseover( function() {
        $(this).addClass('header_link_active');
    });


    $(".header_link").mouseleave( function() {
        $(this).removeClass('header_link_active');
    });


    $(".burger").on('click', function(){
        $('.header-mobile').addClass('header-mobile_active');
    });


    $(".header-mobile__close").on('click', function() {
        $('.header-mobile').removeClass('header-mobile_active');
    });

    $(".news_readmore").on('click', function(e) {
        e.preventDefault();
        $(".news_content_more").slideToggle();
    });

    $('.form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true
            },
            email: {
                required: true
            }
        },
        errorClass: "invalid",
        errorElement: "div",
        messages: {
            username: {
                required: "Заполните поле"
            },
            phone: "Укажите телефон",
            email: {
                required: "Заполните поле"
            },
            textarea: {
                required: "Заполните поле"
            }
        }
    });

    // $('.footer-form').validate({
    //     rules: {
    //         email: {
    //             required: true
    //         }
    //     },
    //     errorClass: "invalid",
    //     errorElement: "div",
    //     messages: {
    //         email: {
    //             required: "Заполните поле"
    //         }
    //     }
    // });

    $(".form").submit(function(e) {
        e.preventDefault();
        if ($(".form_textarea").hasClass("invalid") && $(".form_input").hasClass("invalid")) {
            console.log("error");
        } else {
            $(".form_button").css('display', 'none');
            $(".form-button_send").css('display', 'block');
        }

    });


});
