define([
    'app/controllers/headerController',
    'app/controllers/homeController',
    'app/controllers/indexController',
     'app/controllers/paramController',
     'app/controllers/localizationController'
], function (
    HeaderController, 
    homeController,
    indexController,
    paramController,
    localizationController) {
    'use strict';
    function init() {
        return angular.module('controllers', [])
            .controller('HeaderController', HeaderController)
            .controller('HomeController', homeController)
            .controller('IndexCtrl', indexController)
            .controller('ParamController', paramController)
            .controller('LocalizationController', localizationController)
    }
    return {
        init: init
    };
});