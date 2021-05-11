import axios from 'axios';
import cartActionsTypes from './cartActionsTypes';
import CartProduct from '../../domain/cartProduct';
import Cart from '../../domain/cart';

export function loadCart() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://60994a7699011f0017140902.mockapi.io/api/cactusDesert/cart');

      const products = data.map((item) => new CartProduct(
        item.id,
        item.attributes.name,
        item.attributes.botanic_name,
        item.attributes.image,
        item.original_unit_price,
        item.quantity,
        item.stock
      ));

      dispatch({
        type: cartActionsTypes.LOAD_CART,
        cart: new Cart(products)
      });
    } catch {
      dispatch({
        type: cartActionsTypes.LOAD_CART_ERROR,
        cart: null
      });
    }
  };
}

export function increaseQuantity(id) {
  return {
    type: cartActionsTypes.INCREASE_PRODUCT_QUANTITY,
    id
  };
}

export function decreaseQuantity(id) {
  return {
    type: cartActionsTypes.DECREASE_PRODUCT_QUANTITY,
    id
  };
}

export function deletProductCart(id) {
  return {
    type: cartActionsTypes.DELETE_PRODUCT,
    id
  };
}
