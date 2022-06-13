angular
    .module('registroCoste')
    .component('registroCoste', {
        templateUrl: 'registro-coste/registro-coste.template.html',
        controller: ['Costes', 'Productos', function RegistroCosteController(Costes, Productos) {
            let self = this;
            let opcion = '';
            let costesList = [];
            self.loading = true;
            // Referencias HTML
            const datalistCoste = document.querySelector('#costes');

            // Obtención de los tipos de corte, y almacenamiento de su nombre e ID para el datalist
            self.costes = Productos.getProductos(({ producto }) => {
                producto.forEach((product) => {
                    opcion += `<option value="${product.prod_name}">`;
                    let costesInfo = {
                        prod_name: product.prod_name,
                        id: product.id
                    }
                    costesList.push(costesInfo);
                });
                datalistCoste.innerHTML += opcion;
                self.loading = false;
            });

            self.getIDCoste = () => {
                let coste = costesList.find((cost) => {
                    return (cost.prod_name === self.coste) && cost.id;
                });
                const { id } = coste;
                return id;
            }

            self.registrarCoste = () => {
                if (self.coste && self.nombre) {
                    let { $promise } = Costes.createCoste({
                        name_cost: self.nombre,
                        id_pro_type: self.getIDCoste()
                    });
                    $promise.then(({ retro, estatus, error }) => {
                        if (estatus === 'ok') {
                            alertify.alert('Registrar coste', retro, function () {
                                self.limpiar();
                            });
                        } else {
                            alertify.set('notifier', 'position', 'top-center');
                            alertify.error(error);
                        }
                    })
                }
            }

            self.limpiar = () => {
                document.querySelector('#nombre').value = '';
                document.querySelector('#coste').value = '';
            }
        }]
    })