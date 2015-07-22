jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    var activeSlide = 1; 
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');
        activeSlide = dataslide; 

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }


    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 1) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScrollUp(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 1
        }, 1000, 'easeInOutCirc');       
    }

    function goToByScrollDown(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top + 1
        }, 1000, 'easeInOutCirc');       
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        if(activeSlide < dataslide) goToByScrollDown(dataslide);
        else goToByScrollUp(dataslide);
        activeSlide = dataslide; 
    });



});