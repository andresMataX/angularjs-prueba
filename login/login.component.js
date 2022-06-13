angular
    .module('login')
    .component('login', {
        templateUrl: 'login/login.template.html',
        controller: function LoginController() {
            this.prueba = 'Prueba de login';
        }
    })