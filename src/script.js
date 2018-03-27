$('.upper-burger').click(() => {
    $('.menu').animate({
        left: '0'
    }, 600);
    $('html').css('overflow', 'hidden')
});

$('.menu').click(() => {
    $('.menu').animate({
        left: '100%'
    }, 600);
    $('html').css('overflow', 'auto')
});

$('.list-account-item--radio').hover((e) => {
    let el = e.currentTarget;
    $(el).addClass('radio-active');
}, (e) => {
    let el = e.currentTarget;
    if(!$(el).hasClass('clicked')) $(el).removeClass('radio-active');
});


$('.list-account-item--radio').click((e) => {
    $('.radio-active').removeClass('radio-active');
    $('.clicked').removeClass('clicked');
    let el = e.currentTarget;
    $(el).addClass('radio-active');
    $(el).addClass('clicked');
});



$('.menu-list--item').hover((e) => {
    $('.menu-list--item__with-underline').removeClass('menu-list--item__with-underline');
    let el = e.currentTarget;
    $(el).addClass('menu-list--item__with-underline');
});

$(document).ready(function() {
    $(".menu-list--item a").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
    });
});

$('.slider-nav--item').hover((e) => {
    $('.slider-nav--item').removeClass('slider-item-active');
    let el = e.currentTarget;
    $(el).addClass('slider-item-active');
});

$('.slider-nav--item').click((e) => {
    $('.slider-nav--item__active').removeClass('slider-nav--item__active');
    let el = e.currentTarget;
    $(el).addClass('slider-nav--item__active');
});
