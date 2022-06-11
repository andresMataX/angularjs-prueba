'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/registrar-cliente', {
          template: `
            <sidebar></sidebar>
            <registro-cliente></registro-cliente>
          `
        }).
        when('/registrar-coste', {
          template: `
            <sidebar></sidebar>
            <registro-coste></registro-coste>
          `
        }).
        when('/menu-coste', {
          template: `
            <sidebar></sidebar>
            <menu-coste></menu-coste>
          `
        }).
        when('/hola', {
          template: '<hola></hola>'
        }).
        otherwise('/hola');
    }
  ]);
