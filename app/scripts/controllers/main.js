'use strict';

angular.module('MKDesignApp')
  .controller('MainCtrl', function ($scope, catalog, basket) {
    $scope.items = catalog.get();
    $scope.basket = basket;

    // trams
  });
