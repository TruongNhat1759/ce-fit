$(document).ready(function(){
 "use strict";
//  var initialslider;
// $(window).on('load', function() {
// 	initialslider = $('.slider-thum .slick-slide').last().attr('data-slick-index');
// 	console.log(initialslider);
// });
$('.slider-big').slick({
	 autoplay: false,
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: false,
 	fade: false,
	dots: false,
	
	// initialSlide: parseInt(initialslider),
 	asNavFor: '.slider-thum',
 	infinite:false,
 });

 $('.slider-thum').slick({
 	slidesToShow: 6,
 	slidesToScroll: 1,	
 	asNavFor: '.slider-big',
 	// initialSlide: parseInt(initialslider),
 	dots: false,
 	focusOnSelect: true,
 	// infinite:false,
 });
 // $('.slider-thum .slick-slide').removeClass('slick-active');
 // $('.slider-thum .slick-slide').eq(0).addClass('slick-active');

//  $('.slider-big').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//  	var mySlideNumber = nextSlide;
//  	$('.slider-thum .slick-slide').removeClass('slick-active');
//  	$('.slider-thum .slick-slide').eq(mySlideNumber).addClass('slick-active');
// });
});