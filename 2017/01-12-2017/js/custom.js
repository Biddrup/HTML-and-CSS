$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:4,
	    lazyLoad:true,
	    loop:true,
	    margin:10
	});
	$('.next-slide .owl-carousel').owlCarousel({
	    items:4,
	    lazyLoad:true,
	    loop:true,
	    margin:10
	});
});