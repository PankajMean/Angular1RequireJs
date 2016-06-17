define([
    'jquery',
    'angular'
], function (jquery, angular) {
    'use strict';
    return ['$scope', '$location', 'Menu', function ($scope, $location, Menu) {
        //$scope.selectedMenu = Menu.selectedMenu;
        $scope.setMenuTitle = function (menuTitle, url) {
            $scope.selectedMenu = menuTitle;
            $location.path(url);
        };

    }]
});