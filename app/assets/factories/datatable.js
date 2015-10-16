var datatableServices = angular.module('datatableServices', ['infinite-scroll']);

datatableServices.factory('Datatable', function($http) {
  var Datatable = function() {
    this.items = [];
    this.tmp = []
    this.busy = false;
    this.initLimit = 30;
    this.loadMoreLimit = 50;
    this.lastId = 0
  };

  Datatable.prototype.nextPage = function() {
    if (this.busy) return;

    if(this.items.length == 0) {
      var url  = "datatables.json?limit="+this.initLimit;
      this.load(url)
    }
    else {
      this.loadMore();
    }

    if(this.tmp.length != 0) {
      this.items = this.items.concat(this.tmp.splice(0,10));
    }
  };

  Datatable.prototype.load = function(url) {
    this.busy = true;

    $http.get(url).success(function(data) {
      this.items = data;
      this.tmp = [];
      if(data.length > 0){
        this.lastId = data[data.length-1].id
        this.loadMore();
      }
      this.busy = false;
    }.bind(this));
  }

  Datatable.prototype.loadMore = function() {
    this.busy = true;

    url = "datatables.json?after="+this.lastId;  

    $http.get(url).success(function(data) {
      if(data.length > 0){
        this.lastId = data[data.length-1].id
        this.tmp = this.tmp.concat(data);
      }
      this.busy = false;
    }.bind(this))
  };

  Datatable.prototype.search = function(filter) {
    if (this.busy) return;
    var url  = "datatables.json";
    this.load(url)
  }

  return Datatable;
});