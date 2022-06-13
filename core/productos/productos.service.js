angular.
    module('core.productos').
    factory('Productos', ['$resource',
        function ($resource) {
            return $resource('https://esst-system-flask.herokuapp.com/read/productos', {}, {
                getProductos: {
                    method: 'GET'
                }
            });
        }
    ]);
