var menu = $('#header .nav'),
	w = $(window);

$('button#sticks').click(function() {
	$(this).toggleClass('close');
	menu.slideToggle(400);

});


w.resize(function() {
	if (w.width()>900) {
		menu.removeAttr('style');
		$('button#sticks').removeClass('close')
	}
});

$('#slider').slick({
	arrows: true,
	autoplay: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/arrow-prev.png" alt="" /></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/arrow-next.png" alt="" /></button>'
});