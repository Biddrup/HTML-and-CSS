$(document).ready(function(){
  $('.owl-carousel').owlCarousel({		//owl activator
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:true
	        }
	    }
	});

  	$('.angle-up-area').click(function(){
		$('body').animate({scrollTop:0},2500);
	})

  	$(".owl-next").html("<i class='fa fa-chevron-right'></i>");
  	$(".owl-prev").html("<i class='fa fa-chevron-left'></i>");

  	new WOW().init();		//wow activator
});