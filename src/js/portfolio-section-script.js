new Swiper(".portfolio-swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	spaceBetween: 60,
	breakpoints: {
		600: {
			slidesPerView: 1,
		},
		800: {
			slidesPerView: 2,
		},
		1100: {
			slidesPerView: 3,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});