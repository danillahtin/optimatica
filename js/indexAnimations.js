
$(document).ready(function() {

//   $("#scrollable-area").panelSnap({panelSelector: 'figure', onSnapStart: function(){
//     log('start snap');
//   },
//   onSnapFinish: function(){},
//   onActivate: function(){
//     log('activate snap');
//   },
//   directionThreshold: 50,
//   slideSpeed: 2000
// });

if ($('#intro-section')) {
  
  $text = $('#intro-section .container');

  var tl = new TimelineMax();


  tl.to($('#intro-section'), longAnimationDuration, {opacity: 1})
  .from($text, longAnimationDuration, {opacity: 0, x: '-=20px'}, 0.5)
  .from($('nav'), mediumAnimationDuration, {autoOpacity: 0, y: '-=100%'}, 0.8)
  .to($('#intro-section'), 2, {backgroundColor: '#2b80ff'});

}


var controller = new ScrollMagic.Controller();


if ($("#optimize-section")) {

  var $items = $("#optimize-section ul li");
  var tween = new TweenMax.staggerTo($items, mediumAnimationDuration, {opacity: 1, scale: 1}, 0.25);
  
  new ScrollMagic.Scene({reverse: false, triggerElement: "#optimize-section"})
  .setTween(tween)
  .addTo(controller);

}

// if ($("media-planning-section")) {

//   var localController = new ScrollMagic.Controller({container : '#scrollable-area', vertical: false});

//   var tween = new TweenMax
//   // .from($('#scrollable-area'), 0.5, {backgroundColor: 'green'});
//   .to($('#scrollable-area'), 2, {scrollTo:$('#scrollable-area figure')[1]});

//   new ScrollMagic.Scene({triggerElement: $('#scrollable-area figure')[0], offset: 200, triggerHook: 0, reverse: true})
//   .setTween(tween)
//   // .addIndicators()
//   .addTo(localController);
// }
// $('#scrollable-area').on('mousewheel', selector, data, handler)



// placement section

if ($("#placement-section")) {

  var tween = new TimelineMax();

  $img = $("#placement-section figure img");
  $block = $("#placement-section .block");
  $ul = $("#placement-section ul");

  tween.to($img, longAnimationDuration, {opacity: 1, transform: 'none'})
  .to($ul, longAnimationDuration, {opacity: 1, transform: 'none'});

  new ScrollMagic.Scene({reverse: false, triggerElement: "#placement-section"})
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
  .to($ul, longAnimationDuration, {opacity: 1, transform: 'none'});

  new ScrollMagic.Scene({reverse: false, triggerElement: "#reportings-section"})
  .setTween(tween)
  .addTo(controller);

}

if ($("#mediastorage-section")) {

  var tween = new TimelineMax();

  $img = $("#mediastorage-section figure img");
  $block = $("#mediastorage-section .block");
  $ul = $("#mediastorage-section ul");

  tween.to($img, longAnimationDuration, {opacity: 1, transform: 'none'})
  .to($ul, longAnimationDuration, {opacity: 1, transform: 'none'});

  new ScrollMagic.Scene({reverse: false, triggerElement: "#mediastorage-section"})
  .setTween(tween)
  .addTo(controller);

}

if ($('#more-functions-section')) {

  var $items = $('#more-functions-section ul li');
  var tween = new TweenMax.staggerTo($items, mediumAnimationDuration, {opacity: 1, transform: 'none'}, 0.25);

  new ScrollMagic.Scene({reverse: false, triggerElement: "#more-functions-section"})
  .setTween(tween)
  .addTo(controller);
}




if ($("#integration-section")) {

  var tween = new TimelineMax();

  $section = $("#integration-section");
  $text = $("#integration-section p, #integration-section h3");
  $img = $("#integration-section img");

  tween
  // .from($section, longAnimationDuration, {backgroundColor: 'white'})
  // .to($text, longAnimationDuration, {opacity: 1, transform: 'none'}, 1)
  .to($img, longAnimationDuration, {opacity: 1, transform: 'none'});

  new ScrollMagic.Scene({reverse: false, triggerElement: "#integration-section"})
  .setTween(tween)
  .addTo(controller);

}

if ($("#facts-section")) {

  var tween = new TimelineMax();

  $p = $("#facts-section ul li p");
  $img = $("#facts-section img");
  $info = $("#facts-section .info");

  tween.staggerFrom($img, longAnimationDuration, {y: '-=100%', opacity: 0}, 0.25);
  

  new ScrollMagic.Scene({reverse: false, triggerElement: "#facts-section"})
  .setTween(tween)
  .addTo(controller);
}



});