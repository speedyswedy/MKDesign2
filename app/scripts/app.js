'use strict';

angular.module('MKDesignApp', [])
  .config(function ($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      })
      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })
      .when('/item/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  });


