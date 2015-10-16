function datatablesIndexCtrl($scope,Datatable) {
  $scope.datatable = new Datatable();

  $scope.search = function() {
    $scope.datatable.search($scope.query)
  }

  $scope.appendSub = function(index) {
    $scope.datatable.appendSubAfter(index)
  }
}
demoApp.controller('datatablesIndexCtrl', datatablesIndexCtrl);