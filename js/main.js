$(window).scroll(function(e){
	$menu = $('div.menu');
	// if($(this).scrollTop() > 350 && $menu.css('position') != 'fixed') {
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
		$(this).find('p').animate({'opacity':'1'});
	});

	// Hide labels on mouseout
	$('.bandInfo').mouseout(function() {
		$(this).find('p').animate({'opacity':'0'});
	});
});