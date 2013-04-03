$(document).ready(function() {
	// Starting positions
	var guruTop		= parseInt($('#guru').css('top'), 10);
	var guruLeft	= parseInt($('#guru').css('left'), 10);
	var shadowLeft	= parseInt($('#shadow').css('left'), 10);
	// Counter...
	var guruDt = 0;
	// The mover....
	moveGuru = function () {
		// Where do we move to?
		guruDt += 0.03;
		var dX = Math.sin(guruDt) * 20;
		var dY = Math.cos(guruDt) * 10;
		// Apply
		$('#guru').css('top', (guruTop + dY) + "px");
		$('#guru').css('left', (guruLeft + dX) + "px");
		$('#shadow').css('left', (shadowLeft + dX) + "px");
	};
	// Now go!
	setInterval(moveGuru, 30);
	moveGuru();
	// And render
	$('#meditate').show();
});