var app = angular.module('myApp', []);

function MyController($scope) {
  $scope.storeName = 'my custom store';
  $scope.products = [
    {name: 'shoes', price: 20},
    {name: 'candy', price: 5}
  ]
}

app.controller('MyController', MyController);
