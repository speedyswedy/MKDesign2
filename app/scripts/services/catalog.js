'use strict';

angular.module('MKDesignApp')
  .service('catalog', function catalog() {
    return [
    {
    	id : 1,
    	name : 'Pelle',
    	price : 50
    },
    {
    	id : 2,
    	name : 'Lina',
    	price : 60
    }];
  });
