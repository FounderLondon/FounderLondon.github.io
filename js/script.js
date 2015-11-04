$(document).ready(function() {

    // Replaces background for mobile
    if ($(window).width() < 550) {
        $("header").attr("data-image-src", "dancing-mobile.jpg");
    }

    // Header title animation

    $(".title-one").animate({opacity:1}, 500, function() {
        $(".title-two").animate({opacity:1}, 500, function() {
            $(".title-three").animate({opacity:1}, 500, function() {
                $(".title-four").animate({opacity:1}, 500);
            });
        });
    });

    // Menu functionality

    $(".hamburger").click(function() {
        $(".hamburger").css("display", "none");
        $(".close").css("display", "block");
        if ($(window).width() > 650) {
            $(".menu").animate({
                top: "0px"
            }, 200);
        }
        if ($(window).width() < 650) {
            $(".menu").animate({
                top: "80px"
            }, 200);
            $("#header-title").css("visibility", "hidden");
        }

    });

    $(".close").click(function() {
        $(".close").css("display", "none");
        $(".hamburger").css("display", "block");
        $(".menu").animate({
            top: "-200px"
        }, 600, function() {
            $("#header-title").css("visibility", "visible");
        });
    });

    // Title (h1) animations

    var waypoint = new Waypoint({
        element: document.getElementById('network'),
        handler: function() {
            $(".title-network").animate({opacity:1}, 500);
        },
        offset: 400
    });

    var waypoint = new Waypoint({
        element: document.getElementById('neighbourhoods'),
        handler: function() {
            $(".title-neighbourhoods").animate({opacity:1}, 500);
        },
        offset: 400
    });

    var waypoint = new Waypoint({
        element: document.getElementById('collaborate'),
        handler: function() {
            $(".title-collaborate").animate({opacity:1}, 500);
        },
        offset: 400
    });

});
