
jQuery(document).ready(function() {

	  var controller = jQuery.superscrollorama();
	  (new TimelineLite())

				pinAnimations


						TweenMax.to($('#company-logo'), .5, {css:{marginLeft:0}})
					
					
				controller.addTween('#company-logo', TweenMax.from( jQuery('#company-logo'), .65, {css:{rotation: 180}, ease:Quad.easeIn}),0, -100);
	});

/*
	$(document).ready(function() {
		var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
		scrollorama.animate('#fax',{ delay: 200, duration: 300, property:'left', start:-1800, end:0 });
		scrollorama.animate('#email',{ delay: 200, duration: 300, property:'right', start:-1800, end:0 });
		scrollorama.animate('#mobile',{ delay: 200, duration: 300, property:'left', start:-1800, end:0 });
		scrollorama.animate('#voice',{ delay: 200, duration: 300, property:'right', start:-1800, end:0 });
		scrollorama.animate('#post',{ delay: 200, duration: 300, property:'left', start:-1800, end:0 });
		scrollorama.animate('#faxtext',{ delay: 200, duration: 200, property:'opacity', start:0 });
		scrollorama.animate('#emailtext',{ delay: 200, duration: 200, property:'opacity', start:0 });
		scrollorama.animate('#mobiletext',{ delay: 200, duration: 200, property:'opacity', start:0 });
		scrollorama.animate('#voicetext',{ delay: 200, duration: 200, property:'opacity', start:0 });
		scrollorama.animate('#posttext',{ delay: 200, duration: 200, property:'opacity', start:0 });
	});
*/