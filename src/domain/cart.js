class Cart {
  constructor(cartProducts) {
    this.cartProducts = cartProducts;
  }

  totalProducts() {
    return this.cartProducts.length;
  }

  totalPrice() {
    return parseFloat(this.cartProducts
      .reduce((total, cartProduct) => total + cartProduct.totalPrice(), 0))
      .toFixed(2);
  }

  taxes() {
    return (this.totalPrice() * 0.21).toFixed(2);
  }

  totalProductsWithTaxes() {
    return (parseFloat(this.totalPrice()) + parseFloat(this.taxes())).toFixed(2);
  }
}

export default Cart;
