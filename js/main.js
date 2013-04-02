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
