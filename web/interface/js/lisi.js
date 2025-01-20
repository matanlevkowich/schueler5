var active = true;

function mobile(){
	if (active) {
		$('#header').addClass('active');
		$('.menu_button').addClass('active');
		$('.navigation').addClass('active');
		active=false;													
	}
	else {
		$('#header').removeClass('active');
		$('.menu_button').removeClass('active');
		$('.navigation').removeClass('active');
		active=true;														
	}
}

$(document).ready(function() {
   $( 'body' ).responsiveVideo();
	$(".grt-cookie").grtCookie({
        duration: 1,
   });
   $('.ham_button').click(function(event){
        mobile();   	
    });
});