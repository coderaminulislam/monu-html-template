$( document ).ready(function() {

   //sticky menu
   $(window).on('scroll', function(){
    var scroll=$(window).scrollTop();
    if(scroll<1){
        $(".sticky").removeClass("scroll-header");
    }
    else{
        $(".sticky").addClass("scroll-header");
    }
   })


    //slider
    $('.slider__active').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            },
            1920:{
                items:1
            }
        }
        
    })


    // Counter up

    $('.counter').counterUp();


    //testimonial
    $('.testimonial__active').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            },
            1920:{
                items:1
            }
        }
        
    });

    //menu
    $('#mobile__menu__active').meanmenu({
        meanMenuContainer:'.mobile__menu',
        meanScreenWidth:"991",
        meanMenuClose:"X",


    });


      
});