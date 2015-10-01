'use strict';

describe('Controller: ListController', function() {

    var ctrl;
    var scope = {};

    beforeEach(module('bohooshApp'));

    beforeEach(inject(function($controller){
      ctrl = $controller('ListController', {$scope: scope});
    }));

    it('should exist', function () {
      expect(ctrl).toBeDefined();
    });

    it('should have select method', function () {
      expect(typeof scope.selectItem).toBe('function');
    });
    
    it('should be able to select an item', function () {

      expect(typeof scope.selectedItem.firstName).toBe('undefined');

      scope.selectItem({
        firstName: 'dave'
      });

      expect(scope.selectedItem.firstName).toBe('dave');
    });
});