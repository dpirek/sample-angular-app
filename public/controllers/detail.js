(function(app) {
  'use strict';

  app.controller('DetailController', DetailController);
  
  DetailController.inject = ['MembersService', '$scope'];
  
  function DetailController(MembersService, $scope) {

    $scope.selectedItem = MembersService.selectedItem;
  }
}(NMS.app));