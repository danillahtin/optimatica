var map, placemark;


function log(message){
	console.log(message);
}

$.fn.scrollEnd = function(callback, timeout) {          
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

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

	var figures = $("#media-planning-section figure");
		
	for (var i = 0; i < figures.length; i++) {
		if (i != index)
			$(figures[i]).removeClass('active');
		else 
			$(figures[i]).addClass('active');
	}

	var width = $('#scrollable-area').width();

	$('#scrollable-area').animate({
		scrollLeft: width*index
	}, 800, function () {
    	isArrowClicked = false;
    	var index = indexForSelectedFigure();
    	setActiveItemWithIndex(index);
    });
}

function setActiveItemWithIndex(index) {

	if (!isArrowClicked) {


	var items = $('.planning-section-item');

	for (var i = 0; i < items.length; i++) {
		if (index == i)
			$(items[i]).addClass('active');
		else
			$(items[i]).removeClass('active');
	}

	$('.page-control span').removeClass('active');
	$($('.page-control span')[index]).addClass('active');

	}
}

var isArrowClicked = false;

$(document).ready(function(){

	$('#navicon').click(function(event) {

		$(this).toggleClass('active');
		$('#menu').toggleClass('active');
		$('nav').toggleClass('active');

	});	

	$('.planning-section-item').click(function(event) {

		$('.planning-section-item').removeClass('active');
		$(this).addClass('active');

		var index = $(this).index('.planning-section-item');
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

	$('#scrollable-area').on("swipe",function(event) {

		log ('mouse');
	  	var offset = $('#scrollable-area').scrollLeft();
		var page = offset/$('#scrollable-area').width();

		setActiveFigureWithIndex(Math.round(page));

	});

	$('#scroll-to-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 400);



	});

	$(window).scroll(function() {

		var opacity = ($(this).scrollTop() > 100) ? 1 : 0;
		$('#scroll-to-top').css('opacity', opacity);

	});
	
});


function initMap() {     

	var office = { lat: 55.756548, lng: 37.595285};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: office,
        styles:[ { "elementType": "geometry", "stylers": [ { "color": "#212121" } ] }, { "elementType": "geometry.stroke", "stylers": [ { "weight": 7.5 } ] }, { "elementType": "labels.icon", "stylers": [ { "color": "#326afb" }, { "visibility": "off" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#326afb" }, { "visibility": "on" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#212121" } ] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [ { "color": "#757575" } ] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "administrative.land_parcel", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#181818" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [ { "color": "#1b1b1b" } ] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#2c2c2c" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#8a8a8a" } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#373737" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#3c3c3c" } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#326afb" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [ { "color": "#4e4e4e" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#000000" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#326afb" } ] } ]
    });


    var pinColor = "2b80ff";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
        new google.maps.Size(40, 37),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 35));

    var marker = new google.maps.Marker({
        position: office,
        map: map,
        icon: pinImage,
        shadow: pinShadow
    });
}
