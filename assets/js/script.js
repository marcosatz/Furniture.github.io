jQuery(document).ready(function($) {
	$('.title-menu').click(function() {
		$(this).find('.sub-menu').slideToggle()	
	})

	// Hero Slide
	$('.hero-slide').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 2,
		variableWidth: true,
		dots: true,
		arrows: true,

		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		appendDots: $('.dots'),
	});

	$('.dots button').text('');
	

	var owl = $('.owl-carousel');
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin: 25,
		nav: false,
		animateOut: 'fadeOut',
		dots: true,
		items: 1
		// responsive:{
		// 	0:{
		// 		items:1
		// 	},
		// 	600:{
		// 		items:2
		// 	},
		// 	1000:{
		// 		items:1
		// 	}
		// },
	})

	$('.nav-next').click(function() {
		owl.trigger('next.owl.carousel');
	});

	$('.posts-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: '0px',
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		dots: true,
		appendDots: $('.posts-dots'),

		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerPadding: '0px',
					centerMode: false,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					centerPadding: '100px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: '160px',
				}
			},
			{
				breakpoint: 840,
				settings: {
					slidesToShow: 1,
					centerPadding: '200px',
				}
			},
			{
				breakpoint: 930,
				settings: {
					slidesToShow: 1,
					centerPadding: '250px',
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerPadding: '300px',
				}
			},
		]
	  });

	  $('.posts-dots button').text('');

	var width1 = $(window).width()
	if(width1 < 576) {
		$('.g-col-5').css({'width': '100%'})
	}
	  $(window).resize(function() {
		var width2 = $(window).width()
		if(width2 < 576) {
			$('.g-col-5').css({"width": '100% !important'})
		}
	  });
})
