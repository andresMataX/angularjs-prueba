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
        when('/listado-coste', {
          template: `
            <sidebar></sidebar>
            <listado-coste></listado-coste>
          `
        }).
        when('/listado-cliente', {
          template: `
            <sidebar></sidebar>
            <listado-cliente></listado-cliente>
          `
        }).
        when('/balance', {
          template: `
            <sidebar></sidebar>
            <balance></balance>
          `
        }).
        when('/login', {
          template: `
            <login></login>
          `
        }).
        otherwise('/login');
    }
  ]);
