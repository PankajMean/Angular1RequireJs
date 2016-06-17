define([

], function () {
    'use strict';
    return ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.data = {
            name: $routeParams.name,
            done: $routeParams.val
        };
    }]
});