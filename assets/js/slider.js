jQuery(document).ready(function ($) {
	"use strict";
	//  TESTIMONIALS CAROUSEL HOOK
	$("#customers-testimonials").owlCarousel({
		loop: true,
		items: 3,
		margin: 0,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayTimeout: 2000,
		smartSpeed: 450,
		navText: [
			'<i class="fa fa-angle-left fa-2x"></i>',
			'<i class="fa fa-angle-right fa-2x"></i>'
		],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
});
