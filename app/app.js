define([], function () {
    'use strict';
    function init() {
        return angular.module("SampleApp", [
            'ngRoute', 
            'ngResource', 
            'ngAnimate', 
            'pascalprecht.translate',
            'controllers',
            'services',
            'filters'])
            .config(['$routeProvider',
                function ($routeProvider) {
                    $routeProvider.
                        when('/route1', {
                            templateUrl: 'view/todo.html',
                            controller: 'IndexCtrl'
                        }).
                        when('/localization', {
                            templateUrl: 'view/localization.html',
                            controller: 'LocalizationController'
                        }).
                        when('/details/:name/:val', {
                            templateUrl: 'view/todo.html',
                            controller: 'ParamController'
                        }).
                        when('/home', {
                            templateUrl: 'view/home.html',
                            controller: 'HomeController'

                        }).
                        otherwise({
                            redirectTo: '/home'
                        });
                }])
            .config(['$translateProvider', function ($translateProvider) {
                $translateProvider
                    .translations('en', {
                        "hi": "My Name is Pankaj Kumar Dewangan"
                    })
                    .translations('ch', {
                        "hi": "我的名字是潘卡·库马尔"
                    })
                    .translations('hi', {
                        "hi": "मेरा नाम पंकज कुमार देवांगन है"
                    })
                    .preferredLanguage('en');
            }]);
    }
    return {
        init: init
    }
});