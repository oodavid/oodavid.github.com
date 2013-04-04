$(document).ready(function(){
	guru.init();
	sticky.init();
});

/*** Guru Meditation ****************************/

var guru = {};
guru.init = function(){
	// Store the starting positions
	guru.guruTop	= parseInt($('#guru').css('top'), 10);
	guru.guruLeft	= parseInt($('#guru').css('left'), 10);
	guru.shadowLeft	= parseInt($('#shadow').css('left'), 10);
	guru.guruDt = 0;
	// Now go!
	setInterval(guru.move, 30);
	guru.move();
	$('#meditate').show();
	// Setup the transform
	$('#shadow').css('-webkit-transform-origin', '50% 50%');
};
guru.move = function(){
	// Where do we move to?
	guru.guruDt += 0.03;
	var dX = Math.sin(guru.guruDt) * 20;
	var dY = Math.cos(guru.guruDt) * 10;
	var dZ = 1 + Math.cos(guru.guruDt) / 4;
	// Apply
	$('#guru').css('top', (guru.guruTop + dY) + "px");
	$('#guru').css('left', (guru.guruLeft + dX) + "px");
	$('#shadow').css('left', (guru.shadowLeft + dX) + "px");
	// Scale the shadow
	$('#shadow').css('-webkit-transform', 'scale(' + dZ +')');
};

/*** Sticky Header ******************************/

var sticky = {};
sticky.init = function(){
	// Store the TOP of the unstuck header
	sticky.top = $('#unstuck').offset().top;
	// Force the height of both elements
	var h = $('#unstuck').height() + 'px';
	$('#stuck').css('height', h);
	$('#unstuck').css('height', h);
	// Detect on scroll...
	$(window).scroll(sticky.scroll);
};
sticky.scroll = function(e){
	// Check the scrolltop...
	if($(window).scrollTop() > sticky.top){
		// Move the content if need be
		if($("#unstuck>div")){
			$("#unstuck>div").appendTo('#stuck');
			$('#stuck').show();
		}
	} else {
		// Move the content if need be
		if($("#stuck>div")){
			$("#stuck>div").appendTo('#unstuck');
			$('#stuck').hide();
		}
	}
};