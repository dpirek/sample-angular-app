'use strict';

describe('Service: MembersService', function() {

  var service;
  var backend;
  var authRequestHandler;

  beforeEach(module('bohooshApp'));

  var service = null;
  
  beforeEach(inject(function($httpBackend, $injector) {

     backend = $injector.get('$httpBackend');

     backend.when('GET', '/api/member/list').respond([{firstName: 'dave'}]);
   }));
  
  beforeEach(inject(function(MembersService) {
    service = MembersService;
  }))

  it('should have list method', function () {
    expect(typeof service.list).toBe('function');
  });

  it('should have deSelectItems method', function () {
    expect(typeof service.deSelectItems).toBe('function');
  });

  it('should have selectItem method', function () {
    expect(typeof service.selectItem).toBe('function');
  });

  it('should have selectItem method', function () {
    expect(typeof service.selectItem).toBe('function');
  });

  it('should be able to call rest', function () {

    service.list().success(function (data) {

      expect(typeof data.length).toBe('number');
    });

    backend.flush();
  });

  it('should be able to select an item', function () {

    service.selectItem({firstName: 'dave'});

    expect(service.selectedItem.firstName).toBe('dave');
  });

  it('should be able to de-select an item', function () {

    var list = [{firstName: 'dave', selected: true}];

    service.deSelectItems(list);

    expect(list[0].selected).toBe(false);
  });
});