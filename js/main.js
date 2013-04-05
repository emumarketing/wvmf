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

// Helper function for map overlays
function mapReset() {
	$('.stages li').css('color', 'black');
	$('.overlay').css('opacity', '0');
}

$(document).ready(function() {
	// Show band image labels on mouseover
	$('.bandInfo').mouseover(function() {
		$(this).find('div').stop().animate({'opacity':'1'});
	});

	// Hide band image labels on mouseout
	$('.bandInfo').mouseout(function() {
		$(this).find('div').stop().animate({'opacity':'0'});
	});

	// Map overlays
	$('#emuDot').css('opacity', 1);

	$('#buzzLink').mouseover(function() {
		mapReset();
		$('#buzzDot').css('opacity', 1);
		$('#buzzLink').css('color','#6bbca7');
	});

	$('#emuLink').mouseover(function() {
		mapReset();
		$('#emuDot').css('opacity', 1);
		$('#emuLink').css('color','#6bbca7');
	});

	$('#streetLink').mouseover(function() {
		mapReset();
		$('#streetDot').css('opacity', 1);
		$('#streetLink').css('color','#6bbca7');
	});
});