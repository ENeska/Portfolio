$('.js_btn_menu').click(function() {
    $(this).toggleClass('active');
    $('#js_nav').toggleClass('open');
});

$(function nav(){

    $('.text').on('mouseover', function () {
        $(this).find('h4').removeClass('normal_font');
        $(this).find('h4').addClass('bold_font');

        $(this).find('.text').removeClass('light');
        $(this).addClass('dark')
    });

    $('.text').on('mouseout', function () {
        $(this).find('h4').removeClass('bold_font');
        $(this).find('h4').addClass('normal_font');

        $(this).removeClass('dark');
        $(this).addClass('light')
    });
});

$('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


/* Zmiana koloru hamburgera */

var scroll2 = $(window).scrollTop();
var h = document.documentElement.clientHeight;

function change_color () {
    
    setInterval(change_color, 50);

    var btn_menu = '.btn_menu span';
    var body = $('body');

    if (scroll2 >= h) {
        body.find(btn_menu).removeClass('color_light');
        body.find(btn_menu).addClass('color_dark');
    }
    else {
        body.find(btn_menu).removeClass('color_dark');
        body.find(btn_menu).addClass('color_light');
    }
}











