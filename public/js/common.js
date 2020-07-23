"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function eventHandler() {
	lightGallery(document.getElementById('lightgallery'));
	var defaultSlide = {
		slidesPerView: 2,
		slidesPerColumn: 3,
		slidesPerColumnFill: 'row',
		watchOverflow: true,
		// slidesPerGroup: 4,
		spaceBetween: 30,
		// loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 28
		},
		breakpoints: _defineProperty({
			// when window width is >= 320px
			576: {
				slidesPerView: 3,
				slidesPerColumn: 3
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 4,
				slidesPerColumn: 3
			},
			992: {
				slidesPerView: 6,
				slidesPerColumn: 3
			},
			// when window width is >= 640px
			1200: {
				slidesPerView: 7,
				slidesPerColumn: 3
			},
			1660: {
				slidesPerView: 8,
				slidesPerColumn: 3
			}
		}, "1660", {
			slidesPerView: 9,
			slidesPerColumn: 3
		})
	};
	var swiper = new Swiper('.gal-section__slider--js', _objectSpread({}, defaultSlide)); // First we get the viewport height and we multiple it by 1% to get a value for a vh unit

	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}