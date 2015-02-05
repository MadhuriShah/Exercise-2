'use strict';

/* Controllers */
var contactListControllers = angular.module('contactListControllers', []);



contactListControllers.controller('ContactListCtrl',['$scope','$http', function($scope,$http) {
   $scope.contacts=$http.get('contacts/contacts.json').success(function(data) {
    $scope.contacts = data;
	});

  $scope.orderProp='first';
}]);




contactListControllers.controller('ContactDetailCtrl',['$scope','$routeParams','$http',
function($scope,$routeParams,$http) {
$http.get('contacts/'+$routeParams.contactId+'.json').success(function(data) {
    $scope.contact= data;
	});

}]);