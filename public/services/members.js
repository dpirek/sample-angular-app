(function(services) {
  'use strict';

  services.factory('MembersService', function($http) {

    return {
      selectedItem: {},
      list: function() {
        return $http.get('/api/member/list');
      },
      deSelectItems: function (list) {

        angular.forEach(list, function (item) {

          if(item.selected) {
            item.selected = false;
          }
        });
      },
      selectItem: function(item) {
        this.selectedItem.firstName = item.firstName;
        this.selectedItem.occupation = item.occupation;
        this.selectedItem.portrait = item.portrait
        this.selectedItem.company = item.company;
        this.selectedItem.motto = item.motto;
      }
    };
  });
}(NMS.services));