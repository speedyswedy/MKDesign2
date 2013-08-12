'use strict';

angular.module('MKDesignApp')
  .controller('CheckoutCtrl', function ($scope, basket) {
    $scope.items = basket.get();
  });
