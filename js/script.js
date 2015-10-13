$(".hamburger").click(function() {
    $(".hamburger").css("display", "none");
    $(".close").css("display", "block");
    $(".menu").animate({
        top: "0px"
    }, 200);
});

$(".close").click(function() {
    $(".close").css("display", "none");
    $(".hamburger").css("display", "block");
    $(".menu").animate({
        top: "-50px"
    }, 600);
});

$(".profile").hover(function() {
    $(".profile-text").fadeIn("slow");
})
