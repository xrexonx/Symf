! function (window) {
	"use strict";

	// Set another templating delimiters for vue, so that it will not conflict for symfony's twig templating
	Vue.config.delimiters = ['${', '}'];

	new Vue({
	  	el: '#singUp',
	  	data: {
	    	message: 'dfgdfgdfgdfgdfgdf',
	  		oUsers : {}
	  	},
	  	methods : {
	  		create: function() {

	  			var sCb = function (response) {
	  				// Manage response here..
	  				console.log(response);
	  			};

	  			var oUsers = {
	  				name: this.oUsers.name,
	  				email: this.oUsers.email,
	  				password: this.oUsers.password,
	  			};

	  			vHttp.send('/create', 'POST', oUsers, sCb);
	  		},
	  		edit: function(id, index) {
           
	  		},
	  		update: function() {
           
	  		},
			destroy: function(id) {

	  		}
	  	}
	});

}(window);