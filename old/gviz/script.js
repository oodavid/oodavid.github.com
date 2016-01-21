// Example:
$(document).ready(function(){
	// Grow the textarea
	$('#tool textarea').autosize();   
	// When we submit...
	$('#tool button').click(function(e){
		// Pull out the values...
		var layout	= $('#tool select').val();
		var content	= $('#tool textarea').val();
		// Create the script STRING and element
		var string	= '<script type="gviz" data-layout="' + layout + '"><![CDATA[\n' + content + '\n]]></script>';
		// Show the embeddable HTML
		var intro	= $('<p>').text('Add this to your page...');
		var html	= $('<pre>').addClass('brush: xml').text(string);
		$('#tool #embed').empty().append(intro).append(html);
		SyntaxHighlighter.highlight();
		// Add the script and parse it
		var script	= $(string);
		$('#tool figure').empty().append(script);
		gviz.parse(script);
    });
});