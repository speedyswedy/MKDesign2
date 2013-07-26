'use strict';

angular.module('MKDesignApp')
  .service('basket', function basket() {
    var basket = {};
    var count = 0;

    return {
    	get: function() {
    		return basket;
    	},
    	add: function(item) {

            //alert("hej" + item.id + " " + count);
    		if (basket[item.id]) {
    			basket[item.id].quantity += 1;
    		} else {
    			basket[item.id] = {
    				name: item.name,
    				quantity: 1,
                    price: item.price
    			};
    		}
            count++;

    	},
    	remove: function (item) {
    		delete basket[item.id];
    	},
    	count: function() {
    		return count;
    	}
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
