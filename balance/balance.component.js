angular
    .module('balance')
    .component('balance', {
        templateUrl: 'balance/balance.template.html',
        controller: function BalanceController() {
            this.prueba = 'Prueba de balance';
        }
    })