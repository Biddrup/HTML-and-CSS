$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoWidth:true,
    autoplay:true,
    
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$().html()