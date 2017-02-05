
$(document).ready(function() {

if ($('#intro-section')) {
  
  $text = $('#intro-section .container');

  var tl = new TimelineMax();


  tl.to($('#intro-section'), 2, {opacity: 1})
  .from($text, longAnimationDuration, {opacity: 0, x: '-=20px'})
  .from($('nav'), mediumAnimationDuration, {autoOpacity: 0, y: '-=100%'})
  .to($('#intro-section'), 2, {backgroundColor: '#2b80ff'});

}


var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({triggerElement:"header", offset: window.innerHeight})
  .setTween("#scroll-to-top", fastAnimationDuration, {opacity: 1})
  .addTo(controller);


  new ScrollMagic.Scene({triggerElement:"header", duration: '100%', triggerHook: 0})
  .setTween("header .photo-block", fastAnimationDuration, {y: "10%", ease: Linear.easeNone})
  .addTo(controller);



if ($("#optimize-section")) {

  var $items = $("#optimize-section ul li");
  var tween = new TweenMax.staggerTo($items, mediumAnimationDuration, {opacity: 1, scale: 1}, 0.25);
  
  new ScrollMagic.Scene({triggerElement: "#optimize-section"})
  .setTween(tween)
  .addTo(controller);

}

if ($('#media-planning-section')) {
  var $items = $("#media-planning-section > div > img");

  var tl = new TimelineMax();

  tl.to($items[0], mediumAnimationDuration, {rotation: 15, y: '+= 45px', x: '+= 17px'})
  .to($items[1], mediumAnimationDuration, {rotation: -25, y: '+= 20px', x: '-= 12px' }, 0);
  
  new ScrollMagic.Scene({triggerElement: "#media-planning-section", duration: $('#media-planning-section').height(), triggerHook: "onEnter"})
  .setTween(tl)
  .addTo(controller)
}

// placement section

if ($("#placement-section")) {

  var tween = new TimelineMax();

  $img = $("#placement-section figure img");
  $block = $("#placement-section .block");
  $ul = $("#placement-section ul");

  tween.to($img, longAnimationDuration, {opacity: 1, transform: 'none'})
  .to($block, longAnimationDuration, {opacity: 1, transform: 'none'}, 0)
  .to($ul, longAnimationDuration, {opacity: 1, transform: 'none'});

  new ScrollMagic.Scene({triggerElement: "#placement-section"})
  .setTween(tween)
  .addTo(controller);

}

// Reportings section

if ($("#reportings-section")) {

  var tween = new TimelineMax();

  $img = $("#reportings-section .img");
  $block = $("#reportings-section .block");
  $ul = $("#reportings-section ul");

  tween.to($img, longAnimationDuration, {opacity: 1, transform: 'none'})
  .to($block, longAnimationDuration, {opacity: 1, transform: 'none'}, 0)
  .to($ul, longAnimationDuration, {opacity: 1, transform: 'none'});

  new ScrollMagic.Scene({triggerElement: "#reportings-section"})
  .setTween(tween)
  .addTo(controller);

}

if ($("#mediastorage-section")) {

  var tween = new TimelineMax();

  $img = $("#mediastorage-section figure img");
  $block = $("#mediastorage-section .block");
  $ul = $("#mediastorage-section ul");

  tween.to($img, longAnimationDuration, {opacity: 1, transform: 'none'})
  .to($block, longAnimationDuration, {opacity: 1, transform: 'none'}, 0)
  .to($ul, longAnimationDuration, {opacity: 1, transform: 'none'});

  new ScrollMagic.Scene({triggerElement: "#mediastorage-section"})
  .setTween(tween)
  .addTo(controller);

}

if ($('#more-functions-section')) {

  var $items = $('#more-functions-section ul li');
  var tween = new TweenMax.staggerTo($items, mediumAnimationDuration, {opacity: 1, transform: 'none'}, 0.25);

  new ScrollMagic.Scene({triggerElement: "#more-functions-section"})
  .setTween(tween)
  .addTo(controller);
}




if ($("#integration-section")) {

  var tween = new TimelineMax();

  $section = $("#integration-section");
  $text = $("#integration-section p, #integration-section h3");
  $img = $("#integration-section img");

  tween.from($section, longAnimationDuration, {backgroundColor: 'white'})
  .to($text, longAnimationDuration, {opacity: 1, transform: 'none'}, 1)
  .to($img, longAnimationDuration, {opacity: 1, transform: 'none'}, 1);

  new ScrollMagic.Scene({triggerElement: "#integration-section"})
  .setTween(tween)
  .addTo(controller);

}

if ($("#facts-section")) {

  var tween = new TimelineMax();

  $p = $("#facts-section ul li p");
  $img = $("#facts-section img");
  $info = $("#facts-section .info");

  tween.staggerFrom($img, longAnimationDuration, {y: '-=100%', opacity: 0}, 0.25)
  .staggerFrom($p, longAnimationDuration, {opacity: 0}, 0.25)
  .from($info, longAnimationDuration, {borderColor: 'transparent'}, 0.5);
  

  new ScrollMagic.Scene({triggerElement: "#facts-section"})
  .setTween(tween)
  .addTo(controller);


}

});