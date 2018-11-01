## products-in-cart

This package uses with method `addTocart()`. The idea of this package determine from which page (`pip` or `conf`) customer added product to cart. This data will be stored at localStorage.

### Usage
##### Initialization
#
```ruby
const CartProducts = require('products-in-cart');
const Cart = new CartProducts();
```
##### Methods
#
```ruby
Cart.addProduct('productId','pageType');
Cart.deleteProduct('productId');
Cart.getProduct('productId');
```

##### Results
Result will be stored at localStorage inside property `productsInCart`
```ruby
localStorage {productsInCart: "{"productId":{"pip":count,"conf":count,"quantity":count}}", length: 1}
```

### Run test
```ruby
npm run test
```