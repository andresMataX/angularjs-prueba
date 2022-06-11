angular
    .module('registroCliente')
    .component('registroCliente', {
        templateUrl: 'registro-cliente/registro-cliente.template.html',
        controller: function RegistroClienteController() {
            this.prueba = 'Prueba de cliente';
        }
    })