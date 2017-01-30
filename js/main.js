var map, placemark;


function log(message){
	console.log(message);
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

	initNav();
	
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

	// var page = $(location).attr('href');
	// if (page.indexOf('get_demo') !== -1)
	// 	return;

	var initialClasses = $('nav').attr('class');

	if ($(window).width() <= 1024) {
		$('nav').addClass('fixed').addClass('transparent-navigation').addClass('class_name');
	} else {
		$('nav').attr('class',initialClasses);
	}

	log(initialClasses);
	$(window).resize(function() {

		// log(initialClasses);
        if ($(window).width() <= 1024) {
        	$('nav').addClass('fixed').addClass('transparent-navigation');
        } else {
        	$('nav').attr('class',initialClasses); 
        }

        log($('nav').className);
	});
}
