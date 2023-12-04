$(function () {

    /* slider active */
    $('.slider_active').slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
        ]
    });

    /* play active */
    $('.play_active').slick({
        slidesToShow: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
        ]
    });



});