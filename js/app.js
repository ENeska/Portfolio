
$(document).ready(function() {


    $('.js_btn_menu').click(function() {
        $(this).toggleClass('active');
        $('#js_nav').toggleClass('open');
    });

    $('nav').find('a').click(function() {
        $('.js_btn_menu').removeClass('active');
        $('#js_nav').removeClass('open');
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

    var h = window.innerHeight;

    window.onscroll = function() {change_color()};

    function change_color() {
        var btn_menu = '.btn_menu span';
        var body = $('body');

        if (document.body.scrollTop >= h-75 || document.documentElement.scrollTop >= h-75) {

            body.find(btn_menu).addClass('color_dark');
            body.find('.btn_menu').addClass('color');

        } else {
            body.find(btn_menu).removeClass('color_dark');
            body.find('.btn_menu').removeClass('color');

        }
    }
    
});




