$(document).ready(() => {
    $('.slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        asNavFor: '.slider__nav',
        prevArrow: '<a href class="slider-arrow slider-prev"><img src="img/back.svg"></a>',
        nextArrow: '<a href class="slider-arrow slider-next"><img src="img/next.svg"></a>'
    });

    $('.slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider__for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
            }
        }]
    });
});
