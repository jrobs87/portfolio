// Note: the loader animation and element are contained in the body of the html so they load first.
// This is crucial in order for the loader to function.  I may move this to the main js file later and
// enqueue it earlier in the head element

// Begin navbar border application/removal
// Applies a bottom border to the navbar element on scroll and removes when at the top of page
// let afterBorder = ('<div>');
// console.log('created border');
// $('header').append(afterBorder);
$(document).ready(function () {

    'use strict';

    var c, currentScrollTop = 0,
        navbar = $('header');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $(window).scroll(function () {
                var a = $(window).scrollTop();
                var b = navbar.height();

                currentScrollTop = a;

                if (c < currentScrollTop && a > b + b) {
                    navbar.addClass("scrollUp");
                    $('#right').css("right", "-4em");
                    $('#left').css("left", "-4em");
                    $('#reminder-top').css("top", "0em");
                    
                } else if (c > currentScrollTop && !(a <= b)) {
                    navbar.removeClass("scrollUp");
                    $('#right').css("right", "0em");
                    $('#left').css("left", "0em");
                    $('#reminder-top').css("display", "none");
                }
                c = currentScrollTop;
            })
        }
    });
});


console.log('all good so far');

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $(".expandBorder").css("width", "100%");
    } else {
        // $(".expandBorder").css("width", "0%"); // i may end up removing this and allowing the border to stick past scroll point
    };
});
// End navbar border application/removal

// Begin Expand/Collapse functionality - sequence of transitions controlled here - DO NOT REORDER
// Controls the expansion of the right sidebar 
$("#expand").click(function () {
    $('#right').css("background-color", "black"); //fade in sidebar/modal background first
    $('#right').css("width", "100%"); //expand to full screen
    $('.sidebarContent').css("visibility", "hidden"); //conceal the social icons
    $('#contactForm').css("opacity", "1"); //reveal the contact form content
    $('#close').css("visibility", "visible"); //reveal the close button
    console.log('sidebar has been expanded'); //every day we commentin'

});

// Controls the collapse of the right sidebar
$("#close").click(function () {
    $('#contactForm').css("opacity", "0"); //fade out the contact form content
    $('#close').css("visibility", "hidden"); //hide the close button
    $('#right').css("width", "4em"); //resets the sidebar to the original width
    $('#right').css("background-color", "white"); //fade out modal to white
    $('.sidebarContent').css("visibility", "visible"); //reveal the social icons (may need to set this to a timer - showing too early)
    console.log('sidebar has been closed'); //every day we commentin'
});
// End Expand/Collapse functionality




window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}