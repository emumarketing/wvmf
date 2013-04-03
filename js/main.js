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
	// Show labels on mouseover
	$('.bandInfo').mouseover(function() {
		$(this).find('p').stop().animate({'opacity':'1'});
	});

	// Hide labels on mouseout
	$('.bandInfo').mouseout(function() {
		$(this).find('p').stop().animate({'opacity':'0'});
	});
});