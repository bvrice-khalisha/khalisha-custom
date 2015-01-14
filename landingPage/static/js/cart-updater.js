
//$(".Remove-cart-button").hide();
//$(document).ready(function(){
//window.count = window.count || 0;
//    $(".add-cart-button, .sofa-add-cart-button").toggle(
//        function(){
//            var value=(parseInt($(".cart-number input").val())+1);
//            $(".cart-number input").val(value);
//            window.count = value;
//            $(this).text('Remove to Cart');
//            window.opener.logNewWindow(window, $(value));
//        },
//        function(){
//            var value = (parseInt($(".cart-number input").val())-1);
////            var value = (value-1) < 0 ? 0 :value -1;
//            $(".cart-number input").val(value);
//            window.count = value;
//            $(this).text('Add to Cart');
//            window.opener.logNewWindow(window, $(value));
//        });
//
//});
//
//window.count = window.count || 0;
//$(".Remove-cart-button").hide();
//$(document).ready(function(){
//    $(".add-cart-button, .sofa-add-cart-button").toggle(
//        function(){
//            window.count=window.count+1;
//            $(".cart-number input").val(window.count);
//            $(this).text('Remove to Cart');
//         },
//        function(){
//            window.count=window.count-1;
////            var value = (value-1) < 0 ? 0 :value -1;
//            $(".cart-number input").val(window.count);
//            $(this).text('Add to Cart');
//        });
//
//})
//if (number=='NaN')
//     var number=0
//$(".Remove-cart-button").hide();
//$(document).ready(function(){
//    $("#nav-start").click(function(){
//        var number=0;
////        alert(number);
//    });
//    $(".add-cart-button, .sofa-add-cart-button").toggle(
//        function(){
//            number=parseInt(number)+1;
//            $(".cart-number input").val(number);
//            $(this).text('Remove to Cart');
//        },
//        function(){
//            number=parseInt(number)-1;
////            var value = (value-1) < 0 ? 0 :value -1;
//            $(".cart-number input").val(number);
//            $(this).text('Add to Cart');
//        });
//    $(".nav-alignment").click(function(){
////        alert(number);
//    });
//
//
//});
var number=0;
$(document).ready(function () {
    $(".add-cart-button, .sofa-add-cart-button").click(function () {
        if ($(this).text() == 'Add to Cart!') {
            number=number+1;
            $(".cart-number input").val(number);
            $(this).text('Remove to Cart!');
        }
        else{
            number=number-1;
            $(".cart-number input").val(number);
            $(this).text('Add to Cart!');
        }
        });

   });