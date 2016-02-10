$(document).ready(function(){
	guru.init();
	nav.init();
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

/*** Nav ****************************************/

var nav = {};
nav.init = function(){
	$('#bignav div').clone().appendTo('#mininav');
};