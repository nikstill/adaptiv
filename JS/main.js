$(document).ready(function() {
    $('.header__burger').click(function(e) {
        e.preventDefault();
        $('.header__burger, .header__menu').toggleClass('on');
    });
});