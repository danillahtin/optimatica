var map, placemark;


$(document).ready(function(){
	
	ymaps.ready(initMap);

	$('.planning-section-item').click(function(event) {

		$('.planning-section-item').removeClass('active');
		$(this).addClass('active');


		var index = $(this).index('.planning-section-item') + 1;
		var imageName = 'img/index/mediaplanning_fig' + index + '.png';

		$('#planning-section-figure').attr('src', imageName);

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
