class CartProduct {
  constructor(id, name, botanicName, image, price, quantity, stock) {
    this.id = id;
    this.name = name;
    this.botanicName = botanicName;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.stock = stock;
  }

  totalPrice() {
    return this.price * this.quantity;
  }
}

export default CartProduct;
