$(function(){

    $('.info-tabs-item').on('click', function (e) {
        e.preventDefault();

        $('.info-tabs-item').removeClass('info-tabs-item--active');
        $(this).addClass('info-tabs-item--active');

        $('.info-tabs-content').removeClass('info-tabs-content--active');
        $($(this).attr('href')).addClass('info-tabs-content--active');
    });

    $('.info-slider').slick();
    
});
