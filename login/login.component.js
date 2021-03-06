angular
    .module('login')
    .component('login', {
        templateUrl: 'login/login.template.html',
        controller: ['Usuarios', function LoginController(Usuarios) {
            let self = this;
            self.loading;

            self.inicioSesion = () => {
                self.loading = true;
                let { $promise } = Usuarios.login({
                    user: self.usuario,
                    pass: self.contrasena
                });
                $promise.then(({ retro, estatus, error }) => {
                    if (estatus === 'ok') {
                        self.loading = false;
                        alertify.alert('Inicio de sesión', retro, function () {
                            window.location.href = "#!/registrar-cliente";
                        });
                    } else {
                        alertify.set('notifier', 'position', 'top-center');
                        alertify.error(error);
                    }
                });
            }
        }]
    })