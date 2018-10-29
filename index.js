(function(global) {
    'use strict';

    const products_in_cart = (function() {
        return function () {
            return 'WORKING!'
        };
    })();

    if (typeof define === 'function') {
        define(function () {
            return products_in_cart;
        });
    } else if (typeof exports === 'object') {
        module.exports = products_in_cart;
    } else {
        global.products_in_cart = products_in_cart;
    }
})(this);

