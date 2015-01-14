$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();

    if (scroll >= 127){
        sticky.addClass('fixed');
        $("#small-logo").show();

    }
    else
    {
        sticky.removeClass('fixed');
        $("#small-logo").hide();

    }
});
