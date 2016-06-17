define([
    'jquery',
    'angular',
    'app/filters/checkMark'
], function (jquery, angular, checkMark) {
    'use strict';
    function init() {
        return angular.module('filters', [])
        .filter('checkmark', checkMark)
    }
    return {
        init: init
    }
});