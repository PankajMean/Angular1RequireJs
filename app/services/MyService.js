define([
], function () {
    'use strict';
    return ['$resource',
        function ($resource) {
            return $resource('../mocks/data.json', {}, {
                'query': { method: 'GET', isArray: true }
            });
        }]
});