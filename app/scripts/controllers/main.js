'use strict';

angular.module('MKDesignApp')
  .controller('MainCtrl', function ($scope, catalog, basket) {
    $scope.catalog = catalog;
    $scope.basket = basket;
  });
