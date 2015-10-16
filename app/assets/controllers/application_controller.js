demoApp = angular.module('demoApp', ['ngRoute','templates','datatableServices','infinite-scroll'])

demoApp.config(function ($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'datatables/index.html',
        controller: 'datatablesIndexCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
});