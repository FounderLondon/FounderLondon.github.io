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

$(".profile").mouseover(function() {
    console.log("hello");
    $($(this).children()[0]).fadeIn("normal");
    $($(this).children()[1]).css({
        opacity: "0.2"
    });
})

$(".profile").mouseleave(function() {
    console.log("jello")
    $($(this).children()[0]).hide();
    $($(this).children()[1]).css({
        opacity: "1.0"
    });
})

// $(window).scroll(function() {
//     if ($(window).scrollTop() >= (85)) {
//         $("nav").css({
//             background-color: "white"
//         });
//         $(".hamburger").css({
//             position: "fixed"
//         });
//         $(".logo").css({
//             position: "fixed"
//         });
//     }
// })
