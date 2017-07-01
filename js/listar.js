(function($){
	$("#btnEnter").click(function(){
	var settings = {
		   "async": true,
                                "crossDomain": true,
	  "url": "http://21.21.21.5:3000/listar/despesa",
	  "method": "GET",
	  "headers": {
	    "content-type": "application/x-www-form-urlencoded",
	    "cache-control": "no-cache",
	    "postman-token": "21a92a35-d6fb-2b94-6e94-9033e30ffc27"
	  }
	}

	$.ajax( settings).done(function(response){
		var exib =response;

		$.each(exib, function(despesa_ent,valor_ent){
			if(exib.length) {
				$('#tbList > tbody').append(
					'<tr>' + '<td>' + this.despesa_ent + 
					'</td>' + '<td>' + "R$ " + this.valor_ent + 
                        			'</td>' + '</tr>'
                        			);
			}
		});
	});

});

})(jQuery);