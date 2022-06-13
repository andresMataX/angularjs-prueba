angular.
    module('core.usuarios').
    factory('Usuarios', ['$resource',
        function ($resource) {
            return $resource('https://esst-system-flask.herokuapp.com/auth/login', {}, {
                login: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    hasBody: true
                }
            });
        }
    ]);
