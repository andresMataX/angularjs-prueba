angular.
    module('core.cortes').
    factory('Cortes', ['$resource',
        function ($resource) {
            return $resource('https://esst-system-flask.herokuapp.com/read/cortes', {}, {
                getCortes: {
                    method: 'GET'
                }
            });
        }
    ]);
