// (function($){
// 	$("#btnEnter").click(function(){
// 		var settings = {
// 		   "async": true,
//                             "crossDomain": true,
// 		  "url": "http://21.21.21.5:3000/listar_cx/despesa",
// 		  "method": "GET",
// 		  "headers": {
// 		    "content-type": "application/x-www-form-urlencoded",
// 		    "cache-control": "no-cache",
// 		    "postman-token": "6686b25d-5999-6100-4a2a-96fdc3ee5c9f"
// 		  }
// 		}

// 	$.ajax( settings).done(function(response){
// 		var exib =response;

// 		$.each(exib, function(descricao_cx,valor_cax){
// 			if(exib.length) {
// 				$('#tbList_cx > tbody').append(
// 					'<tr>' + '<td>' + this.descricao_cx + 
// 					'</td>' + '<td>' + "R$ " + this.valor_cx + 
//                         			'</td>' + '</tr>'
//                         			);
// 			}
// 		});
// 	});

// });

// })(jQuery);