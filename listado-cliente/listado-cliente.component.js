angular
    .module('listadoCliente')
    .component('listadoCliente', {
        templateUrl: 'listado-cliente/listado-cliente.template.html',
        controller: ['Ventas', function ListadoClienteController(Ventas) {
            let self = this;
            self.ventas = Ventas.getVentas(({ clientes }) => {
                this.ventas = clientes;
            });
        }]
    })