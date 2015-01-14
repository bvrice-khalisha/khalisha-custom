$(document).ready(function() {
    $(".one-image-for-silder ").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 1,
        itemsDesktop : [1024,3],
        itemsDesktopSmall : [979,3],
        rewindNav: true

    });
    $(".four-images-for-silder").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1024,3],
        itemsDesktopSmall : [979,3],
        rewindNav: true

    });
    $(".three-images-for-silder").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        itemsDesktop : [1024,3],
        itemsDesktopSmall : [979,3],
        rewindNav: true

    });



});