var map, placemark;


function log(message){
	console.log(message);
}

function indexForSelectedHowWeWorkStep() {

	var steps = $("#how-we-work-horizontal-scroller ul li");

	log(steps);
		
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
	$('#scrollable-area').animate({scrollLeft: width*index}, 800);
}

function setActiveItemWithIndex(index) {

	var items = $('.planning-section-item');

	for (var i = 0; i < items.length; i++) {
		if (index == i)
			$(items[i]).addClass('active');
		else
			$(items[i]).removeClass('active');
	}
}

$(document).ready(function(){
	
	ymaps.ready(initMap);

	$('#navicon').click(function(event) {

		$(this).toggleClass('active');
		$('#menu').toggleClass('active');

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

		setActiveFigureWithIndex(index % 3);
		setActiveItemWithIndex(index % 3);
	});


	$('#arrow-forward').click(function(event) {
		index = indexForSelectedFigure();
		index += 1;

		setActiveFigureWithIndex(index % 3);
		setActiveItemWithIndex(index % 3);
	});

	$('#how-we-work-arrow-back').click(function(event) {
		var index = indexForSelectedHowWeWorkStep();
		index += 2;
		log(index);

		setActiveHowWeWorkStepWithIndex(index % 3);
	});


	$('#how-we-work-arrow-forward').click(function(event) {
		var index = indexForSelectedHowWeWorkStep();
		index += 1;
		log(index);

		setActiveHowWeWorkStepWithIndex(index % 3);
	});

	initNav();

	var navClassIsTransparent = $('nav').hasClass('transparent-navigation');
	
});


function initMap(){     
	map = new ymaps.Map("YandexMap", {
		center: [55.756548, 37.595285],
		zoom: 15
	});

	placemark = new ymaps.Placemark([55.756548, 37.595285], { 
		hintContent: 'Optimatica'
	});

	map.geoObjects.add(placemark);
}

function initNav() {

	var initialClasses = $('nav').attr('class');
	log(initialClasses);
	
	var width = $(window).width();

    if ((width <= 1024) && (width > 512)) {
		$('nav').addClass('fixed').addClass('transparent-navigation').addClass('class_name');
	} else {
		$('nav').attr('class',initialClasses);
	}

	log(initialClasses);
	$(window).resize(function() {

		var width = $(window).width();
		if ((width <= 1024) && (width > 512)) {
        	$('nav').addClass('fixed').addClass('transparent-navigation');
        } else {
        	$('nav').attr('class',initialClasses); 
        }

        log($('nav').className);
	});
}
