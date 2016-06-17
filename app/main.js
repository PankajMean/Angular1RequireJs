require.config({
    baseUrl: "/",
    paths: {
        "jquery": "lib/jquery.min",
        "angular": "lib/angular",
        "ngRoute": "lib/angular-route.min",
        "ngResources": "lib/angular-resource.min",
        "ngAnimate": "lib/angular-animate.min",
        "ngTranslate": "lib/angular-translate.min",
        "bootstrap": "lib/bootstrap.min"

    },
    waitSeconds: 15,
    shim: {
        'angular': { deps: ['jquery'], exports: 'angular' },
        'bootstrap': { deps: ['jquery']},
        'ngRoute': { deps: ['angular'] },
        'ngResources': { deps: ['angular'] },
        'ngAnimate': { deps: ['angular'] },
        'ngTranslate': { deps: ['angular'] }
    },
});
require([
    "jquery",
    "angular",
    "app/app",
    "app/controllers/controllers",
    "app/services/services",
    "app/filters/filters",
    "ngRoute", "ngResources", "ngAnimate", "ngTranslate"],
    function (jquery, angular, app, controllers, services, filters) {
        //This function will be called when all the dependencies
        //listed above are loaded. Note that this function could
        //be called before the page is loaded.
        //This callback is optional.
        app.init();
        controllers.init();
        services.init();
        filters.init();
        angular.element().ready(function () {
            angular.bootstrap(document, ['SampleApp']);
        });
    }
);