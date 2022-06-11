'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('adios').
  component('adios', {
    templateUrl: 'adios/adios.template.html',
    controller: function AdiosController() {
      this.despedida = 'El pepe';
    }
  });
