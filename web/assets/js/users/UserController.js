! function () {
	"use strict";

	// Set another templating delimiters for vue, so that it will not conflict for symfony's twig templating
	Vue.config.delimiters = ['${', '}'];

	new Vue({
	  	el: '#singUp',
	  	data: {
	  		oUsers : {}
	  	},
	  	methods : {
	  		create: function() {
	  			var sCb = function (response) {
	  				// Manage response here..
	  				console.log(response);
	  			};

	  			vHttp.send('/create', 'POST', this.oUsers, sCb);
	  		},
	  		edit: function(id, index) {
           
	  		},
	  		update: function() {
           
	  		},
			destroy: function(id) {

	  		}
	  	}
	});

}();