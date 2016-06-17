define([
    'jquery',
    'angular'
], function (jquery, angular) {
    'use strict';
    return function () {
        this.selectedMenu = 'twoWay';
        this.setMenu = function (menuTitle) {
            this.selectedMenu = menuTitle;
        }
    }
});