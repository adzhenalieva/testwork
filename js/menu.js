$(document).ready(function () {
    $('#menu').click(function () {
        if ($('#menu').hasClass('mobile-menu')) {
            $('.main-nav').css("display", "block");
            $('.profile-div').css("display", "block");
            $('#menu').addClass('mobile-menu-close').removeClass('mobile-menu');
        } else if ($('#menu').hasClass('mobile-menu-close')) {
            $('.main-nav').css("display", "none");
            $('.profile-div').css("display", "none");
            $('#menu').addClass('mobile-menu').removeClass('mobile-menu-close');
        }

    });

});



