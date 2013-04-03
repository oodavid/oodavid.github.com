$(document).ready(function() {
	// Grab guru's starting position
	var guruTop   = parseInt($('#guru div').css('top'), 10);
	var guruRight = parseInt($('#guru').css('marginRight'), 10);
	// Counter...
	var guruDt = 0;
	// The mover....
	moveGuru = function () {
		// Where do we move to?
		guruDt += 0.03;
		var dX = Math.sin(guruDt) * 20;
		var dY = Math.cos(guruDt) * 10;
		// Apply
		$('#guru').css('marginRight', (guruRight + dX) + "px");
		$('#guru div').css('top', (guruTop + dY) + "px");
	};
	// Now go!
	setInterval(moveGuru, 30);
});