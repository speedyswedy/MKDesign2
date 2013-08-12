'use strict';

angular.module('MKDesignApp')
  .controller('ItemsCtrl', function ($scope, catalog, basket) {
    $scope.items = catalog.get();

    $scope.addToBasket = function(item) {
    	console.log("add" + item);
    	basket.add(item);
    }

  });
