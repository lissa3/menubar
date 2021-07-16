// jquery-touchswipe

var overlay = $(".overlay");
var mainMenu = $(".main-nav");
$(".menu-trigger").on("click",function(){
    // only > than slim jq
    // should match with transition time .main-nav
    // overlay.fadeIn(400);
    $(".overlay").show();
    mainMenu.addClass("active");
})
// chaining:
// events(click on .overlay == .main-nav-item
// same effect = overlay div disappears)
// .hide explicit ovelay
$(".overlay,.main-nav-item").on("click",function(){    
    overlay.hide();    
    mainMenu.removeClass("active");
})
// just to test git