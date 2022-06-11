angular
    .module('menuCoste')
    .component('menuCoste', {
        templateUrl: 'menu-coste/menu-coste.template.html',
        controller: function MenuCosteController() {
            this.prueba = 'Prueba de coste';
        }
    })