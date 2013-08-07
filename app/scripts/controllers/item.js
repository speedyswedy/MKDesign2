'use strict';

angular.module('MKDesignApp')
  .controller('ItemCtrl', function ($scope, $routeParams, catalog) {
  	    console.log("hejja:" + $routeParams.id);
  		var items = catalog.get();
		$scope.item = items[$routeParams.id];
  });
