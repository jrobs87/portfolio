// // A $( document ).ready() block.
// $(document).ready(function () {
//     setTimeout($.proxy(function() {
//         $('#loader').css("background-color", "white");
//         $('#loader').css("opacity", "0");
//     }), 1200);
    

//     setTimeout($.proxy(function() {
//      $('#loader').css("display", "none");
//     }), 2500);

//     console.log("ready!");
// });

$("#expand").click(function () {    
    $('#right').css("background-color", "black");
    $('#right').css("width", "100%");
    $('.sidebarContent').css("visibility", "hidden");
    $('#contactForm').css("opacity", "1");
    $('#close').css("visibility", "visible");
    console.log('sidebar has been expanded');
    
});

$("#close").click(function () {
    $('#close').css("visibility", "hidden");
    $('#contactForm').css("opacity", "0");
    $('#right').css("width", "4em");
    $('#right').css("background-color", "white");
    $('.sidebarContent').css("visibility", "visible");
    console.log('sidebar has been closed');
});


// $(".navbar-toggler").click(function () {  
//     $('.navbar').css("background-color", "red");
//     console.log('sidebar has been closed');
// });

console.log('heck');