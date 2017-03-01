$(document).ready(function(){
	var ajaxHandler = $('.app').ajaxHandler({
		test: function(){
			alert('called from options');
		}
	});
	ajaxHandler.parse();
});