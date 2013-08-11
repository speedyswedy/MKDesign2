'use strict';

angular.module('MKDesignApp')
  .service('image', function image() {
    var imageIndex = 0;
    
    return {
    	get: function() {
    		return imageIndex;
    	},
    	set: function(index) {
    		imageIndex = index;
    	}
    };
  });
