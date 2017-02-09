$(document).ready(function() {



	var controller = new ScrollMagic.Controller();

	if ($('#how-we-work-intro-section') && ($(window).width() > 670)) {

		$photo = $('#how-we-work-intro-section .photo-block');
		$text = $('#how-we-work-intro-section .container');
		$items = $('#how-we-work-intro-section ul li');
		$blocks = $('#how-we-work-intro-section ul li p:last-child, #how-we-work-intro-section ul li h5');


		var tween = new TimelineMax();
		tween.to($photo, longAnimationDuration, {opacity: 1})
		.to($text, longAnimationDuration, {opacity: 1})
		.staggerFrom($items, longAnimationDuration, {opacity: 0, x: "+= 100%"}, 0.5)
		.set($items, {className:"+=presented"})
		.from($blocks, mediumAnimationDuration, {opacity: 0, y: "-= 30px"});
	}

	if ($('#development-section')) {

		$block = $('#development-section .center-aligned-block');
		$img = $('#development-section figure img');
		$li = $('#development-section ul li');

		var tl = new TimelineMax();

		tl.from($block, longAnimationDuration, {opacity: 0, y: "-= 20px"})
		.from($img, longAnimationDuration, {opacity: 0, x: "-= 50px"}, 0)
		.staggerFrom($li, mediumAnimationDuration, {opacity: 0, x: "+= 20px"}, 0.25)
		.set($li, {className:"+=presented"});

		new ScrollMagic.Scene({reverse: false, triggerElement:"#development-section"})
	    .setTween(tl)
	    .addTo(controller);
	}

	if ($('#incalcation-section')) {

		$section = $('#incalcation-section');
		$block = $('#incalcation-section .block');
		$img = $('#incalcation-section figure img');

		var tl = new TimelineMax();

		tl.from($section, longAnimationDuration, {backgroundColor: "white"})
		// .from($block, longAnimationDuration, {opacity: 0, y: "-= 20px"})
		.from($img, longAnimationDuration, {opacity: 0, x: "+= 50px"})


		new ScrollMagic.Scene({reverse: false, triggerElement:"#incalcation-section"})
	    .setTween(tl)
	    .addTo(controller);
	}

	if ($('#support-section')) {

		$block = $('#support-section .block');
		$img = $('#support-section figure img');
		$li = $('#support-section ul li');

		var tl = new TimelineMax();

		tl.from($img, longAnimationDuration, {opacity: 0, x: "-= 50px", y: "+= 50px"}, 0)
		// .from($block, longAnimationDuration, {opacity: 0, y: "-= 20px"})
		.from($li, longAnimationDuration, {opacity: 0, x: "+= 50px", y: "+= 50px"}, 0.3)


		new ScrollMagic.Scene({reverse: false, triggerElement:"#support-section"})
	    .setTween(tl)
	    .addTo(controller);
	}

	if ($('#in-contact-section.dark-section')) {

		$section = $('#in-contact-section.dark-section');
		$text = $('#in-contact-section .block');
		$img = $('#in-contact-section figure');

		var tl = new TimelineMax();

		tl.to($section, longAnimationDuration, {backgroundColor: '#2b80ff'})
		// .from($text, longAnimationDuration, {opacity: 0})
		.from($img, 1, {opacity: 0}, longAnimationDuration*2)
		.fromTo($img, 2, {scale: 0.2}, {scale: 1, ease: Elastic.easeOut}, longAnimationDuration*2);


		new ScrollMagic.Scene({reverse: false, triggerElement:"#in-contact-section"})
	    .setTween(tl)
	    .addTo(controller);
	}

});