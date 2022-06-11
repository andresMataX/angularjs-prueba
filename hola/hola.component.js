'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('hola').
  component('hola', {
    templateUrl: 'hola/hola.template.html',
    controller: function HolaController() {
      this.hola = 'HOLLLLLLLLLLLLLLAs';
    }
  });
