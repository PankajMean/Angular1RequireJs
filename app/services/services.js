define([
    'jquery',
    'angular',
    'app/services/MenuService',
    'app/services/MyService'
], function(jquery, angular, MenuService, MyService) {
    'use strict';
    function init() {
        return angular.module('services', [])
        .service('Menu', MenuService)
        .service('MyService', MyService)        
    }
    return {
        init: init
    }
});