angular.
    module('core.costes').
    factory('Costes', ['$resource',
        function ($resource) {
            return $resource('https://esst-system-flask.herokuapp.com/create/coste', {}, {
                createCoste: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    hasBody: true
                },
                getCostes: {
                    url: 'https://esst-system-flask.herokuapp.com/read/costes',
                    method: 'GET'
                }
            });
        }
    ]);
