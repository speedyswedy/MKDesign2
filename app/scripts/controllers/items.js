'use strict';

angular.module('MKDesignApp')
  .controller('ItemsCtrl', function ($scope, catalog) {
  	console.log("buuu");
    $scope.items = catalog.get();
  });
