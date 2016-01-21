$(document).ready(function(e){
	// Reference our elements
	var $typed	= document.getElementById('typed');
	var $next	= document.getElementById('next');
	// Define our keyboard (as an array)
	var keys	= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890 \n\r.\',;?[]!-:&'.split('');
	var key		= false;
	// Read the play
	jQuery.get('/shakespeare/as-you-like-it.txt', function(play){
		// Seconds since 27th July 2013, 1pm (aka 1374930000 in Unix)
		// var secs = Math.round(new Date().getTime() / 1000) - 1374930000;
		// For testing we're using a date in the past
		var secs = Math.round(new Date().getTime() / 1000) - 1373930000;
		// Our Monkey averages 1 char every 200 seconds...
		var have_read = Math.round(secs / 200);
		// That's how much of the script has been written...
		$typed.textContent = play.substring(0, have_read);
		$('#asyoulikeit').scrollTop($('#asyoulikeit')[0].scrollHeight);
		play = play.substring(have_read);
		// Convert the play to an array
		play = play.split('');
		// What's the next expected key?
		whatsNext = function(){
			if(play.length){
				key = play.shift();
			} else {
				clearInterval(timer);
				alert('One monkey has succeeded!');
			}
		};
		whatsNext();
		// Start typing
		type = function(){
			// Smash a random key
			var k = keys[Math.floor(Math.random() * keys.length)];
			if(k == key){
				// Awesome!
				$typed.textContent += k;
				$next.textContent = '';
				$('#asyoulikeit').scrollTop($('#asyoulikeit')[0].scrollHeight);
				whatsNext();
			} else {
				// No good
				$next.textContent = k;
			}
		};
		var timer = setInterval(type, 300);
	});
});