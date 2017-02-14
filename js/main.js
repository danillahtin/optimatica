// Maps

function initMap() {     

  var office = { lat: 55.756548, lng: 37.595285};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: office,
        scrollwheel: false,
        streetViewControl: false,
        minZoom: 10,
        maxZoom: 19,
        mapTypeControl: false,
        styles:[ { "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#dadada" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "road.local", "elementType": "labels.icon", "stylers": [ { "color": "#91349e" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#c9c9c9" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] } ]});


    var pinImage = new google.maps.MarkerImage("img/pin.svg", null, null, new google.maps.Point(47, 59));

    var marker = new google.maps.Marker({
        position: office,
        map: map,
        icon: pinImage
    });
}



var fastAnimationDuration = 0.17;
var mediumAnimationDuration = 0.33;
var longAnimationDuration = 0.7;
var veryLongAnimationDuration = 1.3;


var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({offset: window.innerHeight})
  .setTween("#scroll-to-top", fastAnimationDuration, {opacity: 1})
  .addTo(controller);

// Helpers

function log(message){
	console.log(message);
}

function indexForSelectedHowWeWorkStep() {

	var steps = $("#how-we-work-horizontal-scroller ul li");

	for (var i = 0; i < steps.length; i++) {
		if ($(steps[i]).hasClass('active'))
			return i;
	}
}

function setActiveHowWeWorkStepWithIndex(index) {

	var steps = $("#how-we-work-horizontal-scroller ul li");

	for (var i = 0; i < steps.length; i++) {
		if (i != index)
			$(steps[i]).removeClass('active');
		else 
			$(steps[i]).addClass('active');
	}

	var width = $('#how-we-work-horizontal-scroller').width();

	$('#how-we-work-horizontal-scroller').animate({scrollLeft: width*index}, 800);
}






function indexForSelectedFigure() {

	var figures = $("#media-planning-section figure");

	for (var i = 0; i < figures.length; i++) {
		if ($(figures[i]).hasClass('active'))
			return i;
	}
}

function setActiveFigureWithIndex(index) {


	var $figures = $("#media-planning-section figure");
	var $activeFigure = $("#media-planning-section figure.active");

	if ($(window).width() > 1024) {

		isAnimating = true;

		$($activeFigure).css("z-index", 100);
		$($figures[index]).css("z-index", 200);

		var tween = new TimelineMax();
		tween.fromTo($figures[index], longAnimationDuration, {opacity: 0, x: "20%", delay: 0.1}, {opacity: 1, transform: "none", className: "+=active"})
		.to($activeFigure, longAnimationDuration, {opacity: 0, x: "-20%", className: "-=active", onComplete: function() {
			isAnimating = false;
		}}, 0)
		.set($activeFigure, {transform: "none"});

	} else {

		$($figures).removeClass("active");
		$($figures[index]).addClass('active');

		var width = $('#scrollable-area').width();

		$('#scrollable-area').animate({
			scrollLeft: width*index
		}, 800, function () {
			isArrowClicked = false;
			var index = indexForSelectedFigure();
			setActiveItemWithIndex(index);
		});
	}

}

function setActiveItemWithIndex(index) {

	if (!isArrowClicked) {

		log('start calc');

		var items = $('.planning-section-item');
		items.removeClass('active');
		$(items[index]).addClass('active');

		$('.page-control span').removeClass('active');
		$($('.page-control span')[index]).addClass('active');

	}
}

var isArrowClicked = false;
var isAnimating = false;


$(document).ready(function() {
// Handlers

	$('#navicon').click(function(event) {

		$(this).toggleClass('active');
		$('#menu').toggleClass('active');
		$('nav').toggleClass('active');

	});	

	$('.planning-section-item').click(function(event) {


		if (isAnimating)
			return false;

		if ($(window).width() <= 1024)
			return false;

		$('.planning-section-item').removeClass('active');
		$(this).addClass('active');

		var index = $(this).index('.planning-section-item');
		var offset = 100/3*index;

		TweenMax.to($('#planning-selection'), mediumAnimationDuration, {left: offset + "%"});

		setActiveFigureWithIndex(index);
	});

	$('#arrow-back').click(function(event) {
		index = indexForSelectedFigure();
		index += 2;

		isArrowClicked = true

		setActiveFigureWithIndex(index % 3);
		setActiveItemWithIndex(index % 3);
	});


	$('#arrow-forward').click(function(event) {
		index = indexForSelectedFigure();
		index += 1;

		isArrowClicked = true

		setActiveFigureWithIndex(index % 3);
		setActiveItemWithIndex(index % 3);
	});

	$('#how-we-work-arrow-back').click(function(event) {
		var index = indexForSelectedHowWeWorkStep();
		index += 2;

		setActiveHowWeWorkStepWithIndex(index % 3);
	});


	$('#how-we-work-arrow-forward').click(function(event) {
		var index = indexForSelectedHowWeWorkStep();
		index += 1;

		setActiveHowWeWorkStepWithIndex(index % 3);
	});

	$('#scrollable-area').scroll(function() {
		var offset = $(this).scrollLeft();
		var page = offset/$(this).width();

		setActiveItemWithIndex(Math.round(page));
	});

	$('#scroll-to-top').click(function() {
		log('click');

	});


// $('.form input, .form textarea').change(function(){
// 	$('.form input, .form textarea').removeClass('invalid');
// });

$('form').submit(function(evt) {
	log("submit");
	evt.preventDefault();
	$(this).valid()
});

$('.close').click(function(event) {
	TweenLite.to(".success-submit", fastAnimationDuration, {autoAlpha:0});
});

$('.dimming-view').click(function(event) {
	TweenLite.to(".success-submit", fastAnimationDuration, {autoAlpha:0});
});

 $('form').validate({

		  focusInvalid: true,
		  errorClass: "invalid",
		  onfocusout: false,
		  errorPlacement: function(error, element){},
		  rules:{
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },  
            message:{
                required: false
            }
       },
       submitHandler: function (form) { 
   			TweenLite.to(".success-submit", fastAnimationDuration, {autoAlpha:1});
           return false; 
       },
	});
});
