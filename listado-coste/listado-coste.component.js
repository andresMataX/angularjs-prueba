angular
    .module('listadoCoste')
    .component('listadoCoste', {
        templateUrl: 'listado-coste/listado-coste.template.html',
        controller: ['Costes', function ListadoCosteController(Costes) {
            let self = this;
            self.loading = true;
            self.costes = Costes.getCostes(({ costes }) => {
                this.costes = costes;
                self.loading = false;
            });
        }]
    })