angular
    .module('listadoCoste')
    .component('listadoCoste', {
        templateUrl: 'listado-coste/listado-coste.template.html',
        controller: function ListadoCosteController() {
            this.prueba = 'Prueba de listado coste';
        }
    })