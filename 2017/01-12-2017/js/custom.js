$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:6,
            }
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
    $(".owl-next").html('<img src="../images/1.png" style="width=">');
});