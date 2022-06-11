angular
    .module('registroCoste')
    .component('registroCoste', {
        templateUrl: 'registro-coste/registro-coste.template.html',
        controller: function RegistroCosteController() {
            this.prueba = 'Prueba de coste';
        }
    })