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
            }
            if(pageType === 'pip') {
                productsInCart[id].pip++;
            }
            if(pageType === 'conf') {
                productsInCart[id].conf++;
            }

            productsInCart[id].quantity = productsInCart[id].pip + productsInCart[id].conf;
            this.storage.setItem('productsInCart', JSON.stringify(productsInCart));
        }

        deleteProduct(id) {
            let productsInCart = JSON.parse(this.storage.getItem('productsInCart'));

            // decrease only quantity property, doesn't apply for pip and conf
            productsInCart[id].quantity--;

            if(productsInCart[id].quantity <= 0) {
                delete productsInCart[id];
            }
            this.storage.setItem('productsInCart',JSON.stringify(productsInCart));
        }

        getProduct(id) {
            let productsInCart = JSON.parse(this.storage.getItem('productsInCart'));
            if(productsInCart.hasOwnProperty(id)) {
                return productsInCart[id];
            }
        }
    }

    module.exports = CartProducts;
})(this);

