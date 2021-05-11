/* eslint-disable no-case-declarations */
import cartActionsTypes from '../actions/cartActionsTypes';
import Cart from '../../domain/cart';
import CartProduct from '../../domain/cartProduct';

export default function cartReducer(state = [], actions) {
  switch (actions.type) {
    case cartActionsTypes.LOAD_CART:
      return actions.cart;

    case cartActionsTypes.INCREASE_PRODUCT_QUANTITY:
      const increasedCartProducts = state.cartProducts.map((cartProduct) => {
        if ((cartProduct.id === actions.id) && (cartProduct.quantity < cartProduct.stock)) {
          return Object.assign(
            new CartProduct(),
            cartProduct, { quantity: cartProduct.quantity + 1 }
          );
        }
        return cartProduct;
      });

      return Object.assign(new Cart(), state, { cartProducts: increasedCartProducts });

    case cartActionsTypes.DECREASE_PRODUCT_QUANTITY:
      const decreasedCartProducts = state.cartProducts.map((cartProduct) => {
        if ((cartProduct.id === actions.id) && (cartProduct.quantity > 1)) {
          return Object.assign(
            new CartProduct(),
            cartProduct, { quantity: cartProduct.quantity - 1 }
          );
        }
        return cartProduct;
      });

      return Object.assign(new Cart(), state, { cartProducts: decreasedCartProducts });

    case cartActionsTypes.DELETE_PRODUCT:
      const updatedCartProducts = state.cartProducts
        .filter((cartProduct) => cartProduct.id !== actions.id);

      return Object.assign(new Cart(), state, { cartProducts: updatedCartProducts });

    default:
      return state;
  }
}
