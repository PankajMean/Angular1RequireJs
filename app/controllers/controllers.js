define([
    'app/controllers/headerController',
    'app/controllers/homeController',
    'app/controllers/indexController'
], function (HeaderController, homeController, indexController) {
    'use strict';
    function init() {
        return angular.module('controllers', [])
            .controller('HeaderController', HeaderController)
            .controller('HomeController', homeController)
            .controller('IndexCtrl', indexController)
            
    }
    return {
        init: init
    };
});