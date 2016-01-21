$(document).ready(function(){
	// Just grow
	$('#textarea1').autoGrow({ minHeight: 30, maxHeight: 120 });
	// With callback!
	function doShrink(e){
		var h = 200 - parseInt($(this).css('height'), 10);
		$('#shrink').height(h);
	}
	$('#textarea2').autoGrow({ minHeight: 30, maxHeight: 120, callback: doShrink });
});