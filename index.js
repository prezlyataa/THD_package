(function() {
    'use strict';

    class CartProducts {
        constructor() {
            this.storage = window.localStorage;
        }

        addProduct(id, pageType) {
            if(!this.storage.hasOwnProperty('productsInCart')) {
                this.storage.setItem('productsInCart', JSON.stringify({}));
            }
            let productsInCart = JSON.parse(this.storage.getItem('productsInCart'));
            if(!productsInCart.hasOwnProperty(id)) {
                productsInCart[id] = { pip: 0, conf: 0 };
            } else {
                if(pageType === 'pip') {
                    productsInCart[id].pip++;
                }
                if(pageType === 'conf') {
                    productsInCart[id].conf++;
                }
            }
            this.storage.setItem('productsInCart', JSON.stringify(productsInCart));
        }
    }

    module.exports = CartProducts;
})(this);

