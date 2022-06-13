angular
    .module('registroCliente')
    .component('registroCliente', {
        templateUrl: 'registro-cliente/registro-cliente.template.html',
        controller: ['Cortes', 'Usuarios', function RegistroClienteController(Cortes, Usuarios) {
            let self = this;
            let opcion = '';
            let cortesList = [];
            self.loading = true;
            // Referencias HTML
            const datalistCorte = document.querySelector('#cortes');

            // Obtención de los tipos de corte, y almacenamiento de su nombre e ID para el datalist
            self.cortes = Cortes.getCortes(({ cortes }) => {
                cortes.forEach((corte) => {
                    opcion += `<option value="${corte.cut_name}">`;
                    let cortesInfo = {
                        cut_name: corte.cut_name,
                        id: corte.id
                    }
                    cortesList.push(cortesInfo);
                });
                datalistCorte.innerHTML += opcion;
                self.loading = false;
            });

            self.getIDCorte = () => {
                let corte = cortesList.find((corte) => {
                    return (corte.cut_name === self.corte) && corte.id;
                });
                const { id } = corte;
                return id;
            }

            self.registrarUsuario = () => {
                if (self.corte && self.nombre && self.apellido) {
                    let { $promise } = Usuarios.createUser({
                        name_cli: self.nombre,
                        l_name_cli: self.apellido,
                        id_cut_type: self.getIDCorte()
                    });
                    $promise.then(({ retro, estatus }) => {
                        alertify.set('notifier', 'position', 'top-center');
                        if (estatus === 'ok') {
                            alertify.success(retro);
                            setTimeout(() => {
                                // window.location.href = "registro_cliente.html";
                            }, 1500);
                        } else {
                            alertify.error(error);
                        }
                    })
                }
            }
        }]
    })