function datatablesIndexCtrl($scope,Datatable) {
  $scope.datatable = new Datatable();

  $scope.search = function() {
    $scope.datatable.search($scope.query)
  }
}
demoApp.controller('datatablesIndexCtrl', datatablesIndexCtrl);