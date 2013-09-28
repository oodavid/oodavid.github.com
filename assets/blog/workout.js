$(document).ready(function(){
	// Read the workout number and apply it to the form
	$('#setup input').val(localStorage.getItem('number') | 0);
	// When we submit
	$('#setup').submit(function(e){
		// Which workout? Validated and defaulted to 0
		var number = parseInt($('#setup input').val(), 10);
		number = number < 1 ? 1 : number;
		// Store it
		localStorage.setItem('number', (number+1));
		$('#setup input').val((number+1));
		// Convert to a decimal multiplier
		var multiplier = number > 31 ? 1 : (number-1) / 30;
		// Tweak the exercises...
		$('span[data-min]').each(function(k,v){
			// Grab the attributes
			var min = parseInt($(this).attr('data-min'));
			var max = parseInt($(this).attr('data-max'));
			var dif = max - min;
			// Calculate base d
			$(this).text(Math.round(min + (dif * multiplier)));
		});
		// Maximum?
		$('#setup span').hide();
		if(multiplier == 1){
			$('#setup span').show();
		}
	});
});