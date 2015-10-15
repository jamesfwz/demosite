var datatableServices = angular.module('datatableServices', ['infinite-scroll']);

datatableServices.factory('Datatable', function($http) {
  var Datatable = function() {
    this.items = [];
    this.tmp = []
    this.busy = false;
    this.init = 30
    this.step = 2;
  };

  Datatable.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;

    if(this.items.length == 0) {
      var url  = "datatables.json?limit="+this.init;

      $http.get(url).success(function(data) {
        this.items = data;
      }.bind(this));
    }

    if(this.tmp.length ==0) {
      url = "datatables.json?offset="+this.init;  

      $http.get(url).success(function(data) {
        this.tmp = data
      }.bind(this))
    }
    else {
      this.items = this.items.concat(this.tmp.splice(0,this.step));
    }
    this.busy = false;
  };

  return Datatable;
});