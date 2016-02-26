! function (window) {
	"use strict";

	// Set another templating delimiters for vue, so that it will not conflict for symfony's twig templating
	Vue.config.delimiters = ['${', '}'];

	new Vue({
	  	el: '#app',
	  	data: {
	    	message: '',
	  		oUsers : {}
	  	},
	  	methods : {
	  		login: function () {

	  		},           
	  		logout: function () {

	  		}
	  	}
	});

}(window);