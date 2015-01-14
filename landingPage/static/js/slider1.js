
$(document).ready(function() {

    $(".one-image-for-silder ").owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        stagePadding: 0,
        smartSpeed: 120,
        dots: true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true

    });
    $(".four-images-for-silder").owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            }
        }


    });
    $(".three-images-for-silder").owlCarousel({
        loop:true,
        autoplay:true,
        margin:20,
        nav:true,
        responsiveClass:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }

    });
})