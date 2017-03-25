myApp.controller('secondCtrl',['$scope','$resource','MuYue',function ($scope,$resource,YW) {
  console.log($scope.url);
  $scope.mouseObj = true;
  $scope.mouseEnter = function () {
    $scope.mouseObj = true;
    $scope.ngLink2 = 'img/12.png'
  };
  $scope.mouseLeave = function () {
    $scope.mouseObj = false;
    $scope.ngLink2 = 'img/9.png'
  };

}]);
