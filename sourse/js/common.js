 
 

function eventHandler() { 
	lightGallery(document.getElementById('lightgallery')); 
	let defaultSlide = {
		slidesPerView: 2,
		slidesPerColumn: 3,
		slidesPerColumnFill: 'row',
		watchOverflow: true,
		// slidesPerGroup: 3,
		spaceBetween: 30,
		// loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 10,
		},
		breakpoints: {
			// when window width is >= 320px
			576: {
				slidesPerView: 3,
				slidesPerColumn: 3,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 4,
				slidesPerColumn: 3,
			},

			992: {
				slidesPerView: 6,
				slidesPerColumn: 3,
			},

			// when window width is >= 640px
			1200: {
				slidesPerView: 7,
				slidesPerColumn: 3,
			},

			1660: {
				slidesPerView: 8,
				slidesPerColumn: 3,
			},
			1660: {
				slidesPerView: 9,
				slidesPerColumn: 3,
			},
		}
	}
	let swiper = new Swiper('.gal-section__slider--js', {
		...defaultSlide,
	
	});
 
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
