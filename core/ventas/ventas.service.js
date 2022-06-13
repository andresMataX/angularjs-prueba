angular.
    module('core.ventas').
    factory('Ventas', ['$resource',
        function ($resource) {
            return $resource('https://esst-system-flask.herokuapp.com/create/venta', {}, {
                createVenta: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    hasBody: true
                },
                getVentas: {
                    url: 'https://esst-system-flask.herokuapp.com/read/clientes',
                    method: 'GET'
                },
                getTransacciones: {
                    url: 'https://esst-system-flask.herokuapp.com/read/transacciones',
                    method: 'GET'
                }
            });
        }
    ]);
