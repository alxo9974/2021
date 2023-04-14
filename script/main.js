$(document).ready(function () {

    $('#fullpage').fullpage({
        //options
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: true,
        navigation: 'right',
        sectionsColor: ['#000', '#fff', '#f27e24', '#6bbef2', '#333', ]
    });

    
$('.ham').click(function(e){
    e.preventDefault();
    $(this).toggleClass('close');
})


    $(".ham").on('click',function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('.sidemenu').toggleClass('open');
    })

    $("#design .ilust").click(function(){
        $("#design .modal1").fadeIn(500);
    })


    $("#design .poster").click(function(){
        $("#design .modal2").fadeIn(500);
    })

    $("#design .detail").click(function(){
        $("#design .modal3").fadeIn(500);
    })


    $("#design .de_logo").click(function(){
        $("#design .modal4").fadeIn(500);
    })



    $('.design li').click(function(){
        $('.modal_wrap').stop().fadeIn();
        // $('body').addClass('fixed');
        $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
        });
        });

        $('.modal_wrap').click(function(){
        $('.modal_wrap').stop().fadeOut();
        $('.modal').stop().fadeOut();
        // $('body').removeClass('fixed');
        $('body').off('scroll touchmove mousewheel');
        });



});