(function(app) {
  'use strict';

  app.controller('ListController', ListController);
  
  ListController.inject = ['MembersService', '$scope'];
  
  function ListController(MembersService, $scope) {

    $scope.selectedItem = MembersService.selectedItem;

    // List items.
    MembersService.list().success(function (list) {
      $scope.list = list;
    });

    // Select item.
    $scope.selectItem = function (item) {

      // De-select previously selected.
      MembersService.deSelectItems($scope.list);

      // Select row for CSS highlight.
      item.selected = true;

      // Update service state.
      MembersService.selectItem(item);
    };
  };
}(NMS.app));