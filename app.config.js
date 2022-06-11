'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/adios', {
          template: `
            <sidebar></sidebar>
            <registro-cliente></registro-cliente>
          `
        }).
        when('/hola', {
          template: '<hola></hola>'
        }).
        otherwise('/adios');
    }
  ]);
