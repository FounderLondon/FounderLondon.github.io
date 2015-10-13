$(".hamburger").click(function() {
    $(".hamburger").css("display", "none");
    $(".close").css("display", "block");
    $(".menu").slideDown();
});

$(".close").click(function() {
    $(".close").css("display", "none");
    $(".hamburger").css("display", "block");
    $(".menu").slideUp();
});

$(".profile").hover(function() {
    $(".profile-text").fadeIn("slow");
})
