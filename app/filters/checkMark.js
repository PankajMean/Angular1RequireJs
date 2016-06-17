define([
], function () {
    'use strict';
    return function () {
        return function (input) {
            return input === "true" ? '\u2713' : '\u2718';
        }
    }
});