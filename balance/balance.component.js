angular
    .module('balance')
    .component('balance', {
        templateUrl: 'balance/balance.template.html',
        controller: ['Ventas', function BalanceController(Ventas) {
            let self = this;
            self.ingresos = self.gastos = 0;
            self.loading = true;

            Ventas.getTransacciones(({ transacciones }) => {
                transacciones.forEach((trans) => {
                    if (trans.tran_type == 0) {
                        self.ingresos += trans.tran_price;
                    } else {
                        self.gastos += trans.tran_price;
                    }
                });
                self.renderGrafica();
                self.loading = false;
            });

            self.renderGrafica = () => {
                const data = {
                    labels: [
                        'Costes',
                        'Ingresos'
                    ],
                    datasets: [{
                        label: 'Balance del local',
                        data: [self.gastos, self.ingresos],
                        backgroundColor: [
                            'rgb(192, 57, 43)',
                            'rgb(30, 132, 73)'
                        ],
                        hoverOffset: 4
                    }]
                };

                const config = {
                    type: 'pie',
                    data: data,
                    options: {
                        layout: {
                            autoPadding: false
                        }
                    }
                };

                const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );
            }
        }]
    })