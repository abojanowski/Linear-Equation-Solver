var lesApp = angular.module('lesApp', []);
lesApp.controller('FormController', function($scope) {
  $scope.a = '';
  $scope.b = '';
  $scope.updateResult = function(){
    $scope.result = $scope.b / $scope.a;
  };
});
