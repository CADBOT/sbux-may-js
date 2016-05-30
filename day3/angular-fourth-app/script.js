var app = angular.module('myApp', []);

function PokemonController($http) {
  console.log('in controller');
  var vm = this;
  vm.pokemon = [];
  activate();

  function activate() {
    $http.get('http://pokeapi.co/api/v2/pokemon/1/')
    .success(function(response) {
      vm.pokemon.push(response.name)
    });
    $http.get('http://pokeapi.co/api/v2/pokemon/2/').success(function(response) {
      vm.pokemon.push(response.name)
    });
  }
}

app.controller('PokemonController', PokemonController);
