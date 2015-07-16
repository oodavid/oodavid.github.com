$(document).ready(function(){
	guru.init();
	sticky.init();
});

/*** Guru Meditation ****************************/

var guru = {};
guru.init = function(){
	// Now go!
	guru.guruDt = 0;
	setInterval(guru.move, 30);
	guru.move();
	$('#meditate').show();
};
guru.move = function(){
	// Where do we move to?
	guru.guruDt += 0.03;
	var dX = Math.sin(guru.guruDt) * 20;
	var dY = Math.cos(guru.guruDt) * 10;
	var dZ = 1 + Math.cos(guru.guruDt) / 4;
	// Move the things!
	$('#guru').css('transform', 'translate('+dX+'px,'+dY+'px)');
	$('#shadow').css('transform', 'scale('+dZ+') translate('+dX+'px,0px)');
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
	sticky.scroll();
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