define([
], function (require, factory) {
    'use strict';
    return ['$scope', '$translate', function ($scope, $translate) {
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        }
    }]
});