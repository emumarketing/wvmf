$(window).scroll(function(e){
	// make menu "stick" to top of the window
	$menu = $('div.menu');
	if($(this).scrollTop() > 350) {
		$menu.css({
			'position':'fixed',
			'top':'0px'
		});
	}
	else {
		$menu.css({
			'position':'relative'
		});
	}
});

$(document).ready(function() {
	// Show band image labels on mouseover
	$('.bandInfo').mouseover(function() {
		$(this).find('p').stop().animate({'opacity':'1'});
	});

	// Hide band image labels on mouseout
	$('.bandInfo').mouseout(function() {
		$(this).find('p').stop().animate({'opacity':'0'});
	});

	// Map overlays
	$('#buzzLink').mouseover(function() {
		$('#buzzDot').css('opacity', 1);
	});

	$('#buzzLink').mouseout(function() {
		$('#buzzDot').css('opacity', 0);
	});

	$('#emuLink').mouseover(function() {
		$('#emuDot').css('opacity', 1);
	});

	$('#emuLink').mouseout(function() {
		$('#emuDot').css('opacity', 0);
	});

	$('#streetLink').mouseover(function() {
		$('#streetDot').css('opacity', 1);
	});

	$('#streetLink').mouseout(function() {
		$('#streetDot').css('opacity', 0);
	});
});