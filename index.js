(function() {
    'use strict';

    const productsInCart = (function() {
        return function (a,b) {
            return a + b;
        };
    })();

    module.exports = productsInCart;
})(this);

