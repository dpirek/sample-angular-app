// Gloabl namespace definition.
window.NMS = {
  services: angular.module('MembersService', []),
  app: angular.module('bohooshApp', ['MembersService'])
};