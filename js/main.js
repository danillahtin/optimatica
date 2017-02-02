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
	
	ymaps.ready(initMap);

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
		$(window).animate({scrollTop: 0}, 800);
	});

	$(window).scroll(function() {

		var opacity = ($(this).scrollTop() > 100) ? 1 : 0;
		$('#scroll-to-top').css('opacity', opacity);

	});
	
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
