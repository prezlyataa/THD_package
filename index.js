(function() {
    'use strict';

    const productsInCart = (function(a,b) {
        this.a = a;
        this.b = b;
        return function (a,b) {
            return a + b
        };
    })();

    module.exports = productsInCart;
})(this);

