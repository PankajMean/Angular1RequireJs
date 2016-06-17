define([
    'app/controllers/headerController',
    'app/controllers/homeController',
    'app/controllers/indexController',
     'app/controllers/paramController'
], function (HeaderController, homeController, indexController, paramController) {
    'use strict';
    function init() {
        return angular.module('controllers', [])
            .controller('HeaderController', HeaderController)
            .controller('HomeController', homeController)
            .controller('IndexCtrl', indexController)
            .controller('ParamController', paramController)
            
            
    }
    return {
        init: init
    };
});