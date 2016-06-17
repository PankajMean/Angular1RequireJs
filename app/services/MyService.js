define([
], function () {
    'use strict';
    return ['$resource',
        function ($resource) {
            return $resource('../js/controller/data.json', {}, {
                'query': { method: 'GET', isArray: true }
            });
        }]
});