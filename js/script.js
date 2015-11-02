$(document).ready(function() {
    $(".title-one").animate({opacity:1}, 500, function() {
        $(".title-two").animate({opacity:1}, 500, function() {
            $(".title-three").animate({opacity:1}, 500, function() {
                $(".title-four").animate({opacity:1}, 500);
            });
        });
    });

    $(window).scroll(function() {
        console.log($(".neighbourhoods").scrollTop());
        if ($(".neighbourhoods").scrollTop() === 0) {
            $(".title-neighbourhoods").animate({opacity:1}, 500);
        }
    });

});

$(".hamburger").click(function() {
    $(".hamburger").css("display", "none");
    $(".close").css("display", "block");
    if ($(window).width() > 950) {
        $(".menu").animate({
            top: "0px"
        }, 200);
    }
    if ($(window).width() < 950) {
        $(".menu").css({
            left: "10%"
        });
        $(".menu").animate({
            top: "70px"
        }, 200);
    }

});

$(".close").click(function() {
    $(".close").css("display", "none");
    $(".hamburger").css("display", "block");
    $(".menu").animate({
        top: "-200px"
    }, 600);
});

$(".profile").mouseover(function() {
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
