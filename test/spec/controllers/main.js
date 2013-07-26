'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('MKDesignApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('add item to basket', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
