$(function(){$('#wardrobe-drop-down').hide();});
//$(document).ready(function(){
//    $("#wardrobe").hover(function(){
//        var isHeaderFixed = $(".header").position().top == 0 ;
//        var topMargin = 10;
//        if(isHeaderFixed)
//            topMargin =+ 58;
//
//        $(".wardrobe-drop-down").css({"marginTop":topMargin + "px"}).show();
//    });

$(document).ready(function(){
  $("#wardrobe").hover(function(){
      $(".wardrobe-drop-down").show();
  });
    $(".wardrobe-drop-down").hover(function(){
            $(".wardrobe-drop-down").show();
        },
        function(){
            $(".wardrobe-drop-down").hide();
        });
});