$(document).ready(function() {

    $('.header').scrollToFixed();


    var summaries = $('.summary');
    summaries.each(function(i) {
        var summary = $(summaries[i]);
        var next = summaries[i + 1];

        summary.scrollToFixed({
            marginTop: $('.header').outerHeight(true) + 10,
            limit: function() {
                var limit = 0;
                if (next) {
                    limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                }
                return limit;
            },
            zIndex: 999
        });
    });

});

$(window).scroll(function(){
    if($(".header").hasClass("scroll-to-fixed-fixed")){
        $('.header').find("#small-logo").show();
    }
    else{
        $('.header').find("#small-logo").hide();
    }
});