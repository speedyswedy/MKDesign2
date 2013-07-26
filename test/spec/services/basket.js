'use strict';

describe('Service: basket', function () {

  // load the service's module
  beforeEach(module('MKDesignApp'));

  // instantiate service
  var basket;
  beforeEach(inject(function (_basket_) {
    basket = _basket_;
  }));

  it('should do something', function () {
    expect(basket.count()).toBe(0);
  });

  it('should do something', function () {
    var item = {
      id : 1,
      name : 'Pelle'
    };
    basket.add(item);
    expect(basket.count()).toBe(1);
    basket.add(item);
    expect(basket.count()).toBe(2);
  });

});
