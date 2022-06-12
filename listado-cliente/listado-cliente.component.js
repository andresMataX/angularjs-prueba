angular
    .module('listadoCliente')
    .component('listadoCliente', {
        templateUrl: 'listado-cliente/listado-cliente.template.html',
        controller: function ListadoClienteController() {
            this.prueba = 'Prueba de listado cliente';
        }
    })