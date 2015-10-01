'use strict';

describe('Controller: DetailController', function() {

    var ctrl;
    var scope = {};

    beforeEach(module('bohooshApp'));

    beforeEach(inject(function($controller){
      ctrl = $controller('DetailController', {$scope: scope});
    }));

    it('should exist', function () {
      expect(ctrl).toBeDefined();
    });

    it('should have select method', function () {
      expect(scope.selectedItem).toBeDefined();
    });

    it('should have select method', function () {
      expect(typeof scope.selectedItem).toBe('object');
    });
    
    it('should be able to assign to object', function () {
    
      scope.selectedItem.firstName = 'dave';
    
      expect(scope.selectedItem.firstName).toBeDefined();
    });
});