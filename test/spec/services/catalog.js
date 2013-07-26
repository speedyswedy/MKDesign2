'use strict';

describe('Service: catalog', function () {

  // load the service's module
  beforeEach(module('MKDesignApp'));

  // instantiate service
  var catalog;
  beforeEach(inject(function (_catalog_) {
    catalog = _catalog_;
  }));

  it('should do something2', function () {
    expect(catalog.length).toBe(2);
  });
});
