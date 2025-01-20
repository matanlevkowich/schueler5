$(document).ready(function() {
    var $boxes = $('.grid-item');
	$boxes.hide();
	$('#footer').hide();
    $('.grid').imagesLoaded( function() {
	    $boxes.fadeIn();		
		$('.circle').fadeOut();
		$('.black').fadeOut();
		$('#footer').fadeIn();
	    $('.grid').colcade({
	      columns: '.grid-col',
	      items: '.grid-item'
	    })
	});
});
