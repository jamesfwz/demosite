var datatableServices = angular.module('datatableServices', ['infinite-scroll']);

datatableServices.factory('Datatable', function($http) {
  var Datatable = function() {
    this.items = [];
    this.tmp = []
    this.busy = false;
    this.initLimit = 30;
    this.loadMoreLimit = 50;
    this.lastId = 0
    this.load("datatables.json?limit="+this.initLimit)
  };

  Datatable.prototype.nextPage = function() {
    if(this.tmp.length != 0) {
      this.items = this.items.concat(this.tmp.splice(0,5));
    }
    this.loadMore();
  };

  Datatable.prototype.load = function(url) {
    if (this.busy) return;

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
    if (this.busy || this.tmp.length > 0) return;

    this.busy = true;

    var url = "datatables.json?after="+this.lastId;  

    $http.get(url).success(function(data) {
      if(data.length > 0){
        this.lastId = data[data.length-1].id
        this.tmp = this.tmp.concat(data);
      }
      this.busy = false;
    }.bind(this))
  };

  Datatable.prototype.appendSubAfter = function(index) {
    var random = Math.floor(Math.random()*(this.items.length))
    this.items.splice(index + 1, 0, this.items[random]);
  };

  Datatable.prototype.search = function(filter) {
    var url  = "datatables.json";
    this.load(url)
  };

  return Datatable;
});