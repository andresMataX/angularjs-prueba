angular.
    module('core.usuarios').
    factory('Usuarios', ['$resource',
        function ($resource) {
            return $resource('https://esst-system-flask.herokuapp.com/create/venta', {}, {
                createUser: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    hasBody: true
                }
            });
        }
    ]);
