angular.module('miAp', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './inicio.html'
      })
      .when('/negocios', {
        
        templateUrl: './negocios.html'
      })
      .when('/clientes', {
        
        templateUrl: './clientes.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
