
var fastAnimationDuration = 0.17;
var mediumAnimationDuration = 0.33;
var longAnimationDuration = 0.7;
var veryLongAnimationDuration = 1.3;



// Helpers

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

	log(isAnimating);

	var figures = $("#media-planning-section figure");
	var activeFigure = $("#media-planning-section figure.active");

	$(figures).css('z-index', 0);
	$(activeFigure).css('z-index', 50);
	$(figures[index]).css('z-index', 100);

	$(figures).removeClass('active');
	$(figures[index]).addClass('active');

	if ($(window).width() > 1024) {

		log('willAnimate');
		isAnimating = true;

		$(figures[index]).velocity ({
			opacity: [1, 0]
		}, {
			duration: 200,
			complete: function() {
				isAnimating = false;
			}
		});
	} else {


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

		$('#planning-selection').velocity({
			left: offset + "%"
		}, {
			duration: 400,
			delay: 0,
			ease:Elastic.easeOut
		});

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
		$('html, body').animate({scrollTop: 0}, 400);
	});

	$(window).scroll(function() {

		var opacity = ($(this).scrollTop() > 100) ? 1 : 0;
		$('#scroll-to-top').css('opacity', opacity);

	});




// Animations


// // Optimize section

	// var controller = new ScrollMagic.Controller();

	// // var scene = new ScrollMagic.Scene({triggerElement: "#optimize-section"})
	// // 				// trigger a velocity opaticy animation
	// // 				.setVelocity("#optimize-section-icon-1", {opacity: 1}, {duration: 400})
	// // 				.addIndicators() // add indicators (requires plugin)
	// // 				.addTo(controller);


	// for (var i = 1; i <= 4; i++) {
	// 	var scene = new ScrollMagic.Scene({triggerElement: "#optimize-section-icon-1"})
	// 		.setVelocity("#optimize-section-icon-"+i, {
	// 			opacity: [1, "easeInOutCubic", 0],
	// 			scale: [1, 1.2]
	// 		}, {
	// 			duration: 500,
	// 			delay: 500*(i-1)
	// 		})
	// 		.addIndicators()
	// 		.addTo(controller);

	// }


// // placement section

// // Ноутбук
// var scene = new ScrollMagic.Scene({triggerElement: "#placement-section", offset: -100})
// .setVelocity("#placement-section figure img", longAnimationDuration, {
// 	opacity: 1, 
// 	transform: 'none'
// })
// .addIndicators({name: "1 (duration: 0)"})
// .addTo(controller);

// // Список
// var items = $('#placement-section ul li');

// for (var i = 1; i <= items.length; i++) {

// 	var scene = new ScrollMagic.Scene({triggerElement: "#placement-section", offset: 150 + (i-1)*50})
// 	.setVelocity("#placement-section ul li:nth-child(" + i + ")", veryLongAnimationDuration, {
// 		opacity: 1, 
// 		transform: 'none',
// 		ease:Elastic.easeOut.config(1, 0.5)
// 	})
// 	.addIndicators({name: "1 (duration: 0)"})
// 	.addTo(controller);
// }





// // Reportings section

// items = $('#reportings-section ul li');

// for (var i = 1; i <= items.length; i++) {

// 	var scene = new ScrollMagic.Scene({triggerElement: "#reportings-section", offset: 150 + (i-1)*50 })
// 	.setVelocity("#reportings-section ul li:nth-child(" + i + ")", veryLongAnimationDuration, {
// 		opacity: 1, 
// 		transform: 'none',
// 		ease:Elastic.easeOut.config(1, 0.5)
// 	})
// 	.addIndicators({name: "1 (duration: 0)"})
// 	.addTo(controller);
// }


// // Ноутбук
// var scene = new ScrollMagic.Scene({triggerElement: "#reportings-section", offset: -100})
// .setVelocity("#reportings-section", longAnimationDuration, {
// 	opacity: 1, 
// 	transform: 'none'
// })
// .addIndicators({name: "Not working!!"})
// .addTo(controller);







// // Mediastorage section

// var scene = new ScrollMagic.Scene({triggerElement: "#mediastorage-section", offset: -100})
// .setVelocity("#mediastorage-section figure img", longAnimationDuration, {
// 	opacity: 1, 
// 	transform: 'none'
// })
// .addIndicators({name: "1 (duration: 0)"})
// .addTo(controller);


// var items = $('#mediastorage-section ul li');

// for (var i = 1; i <= items.length; i++) {

// 	var scene = new ScrollMagic.Scene({triggerElement: "#mediastorage-section", offset: 150 + (i-1)*50})
// 	.setVelocity("#mediastorage-section ul li:nth-child(" + i + ")", veryLongAnimationDuration, {
// 		opacity: 1, 
// 		transform: 'none',
// 		ease:Elastic.easeOut.config(1, 0.5)
// 	})
// 	.addIndicators({name: "1 (duration: 0)"})
// 	.addTo(controller);
// }







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
        styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#91349e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
    });


    var pinImage = new google.maps.MarkerImage("img/pin.svg", null, null, new google.maps.Point(47, 59));

    var marker = new google.maps.Marker({
        position: office,
        map: map,
        icon: pinImage
    });
}
