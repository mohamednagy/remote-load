(function ( $ ) {
 	var _root = this;
	_root.options = {};

    $.fn.ajaxHandler = function(options) {
    	var _this = this;

    	if(options != null){
    		$.extend(_root.options, options);
    	}

    	_this.clickHandler = function(event){
			event.preventDefault();
			var elem = event.target;
			var targetSelector = $(elem).attr('target');
			var url = $(elem).attr('href');
			$(elem).find('.loader-wrapper').remove();
			$(elem).parent().append('<div class="loader-wrapper"><div class="cssload-loader"></div></div>');

			$.ajax({
				url: url,
				method: 'get',
				success: function(data){
					$(targetSelector).html(data);
				}
			});
		}

    	_this.parse = function (){
    		var routers = $(_this).find('a[router]');
	    	$.each(routers, function(index, router){
	    		$(router).on('click', _this.clickHandler);
	    	});
    	}

    	return _this;

    };
 
}( jQuery ));