(function() {
    'use strict';

    const products_in_cart = (function(a,b) {
        return function () {
            return a + b;
        };
    })();

    module.exports = products_in_cart;
})(this);

