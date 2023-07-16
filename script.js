$(document).ready(function () {
    $('.slider').bxSlider(
    {
        slideWidth: 700,
        mode:"fade", 
    });
});

$(document).ready(function () {
    $('.slider').bxSlider({
        mode: "fade",
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        slideWidth: 600,
        hideControlOnEnd: true,
    });
});
// горизонтальная прокрутка вертикал -> fade