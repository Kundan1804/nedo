$(window).scroll(function(){
    $(".heading_bulding").css("opacity", 1-$(window).scrollTop()/250)
});