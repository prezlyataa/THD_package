const CartProducts = require('products-in-cart');
const Cart = new CartProducts();

test("should save product to localStorage", () => {
    Cart.addProduct("0", 'conf');
    expect(JSON.parse(window.localStorage.getItem("productsInCart"))["0"]).toEqual({pip: 0, conf: 1, quantity: 1})
});

test("should delete product from localStorage", () => {
    Cart.deleteProduct("0");
    expect(JSON.parse(window.localStorage.getItem("productsInCart"))["0"]).toBe(undefined)
});

test("should save product to localStorage", () => {
    Cart.addProduct("1", "pip");
    expect(JSON.parse(window.localStorage.getItem("productsInCart"))["1"]).toEqual({pip: 1, conf: 0, quantity: 1})
});

test("should return product by id from localStorage", () => {
    Cart.getProduct("1");
    expect(JSON.parse(window.localStorage.getItem("productsInCart"))["1"]).toEqual({pip: 1, conf: 0, quantity: 1})
});

test("should increase pip count and quantity in localStorage", () => {
    Cart.addProduct("1", "pip");
    expect(JSON.parse(window.localStorage.getItem("productsInCart"))["1"]).toEqual({pip: 2, conf: 0, quantity: 2})
});

