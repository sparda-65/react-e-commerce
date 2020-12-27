import { CartActionTypes } from "./cart.types";

export const toogleCartHiden = () => ({
  type: CartActionTypes.TOOGLE_CART_HEDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});
