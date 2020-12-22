import { CartActionTypes } from './cart.types';

export const toogleCartHiden= () =>({
    type:CartActionTypes.TOOGLE_CART_HEDDEN,
});

export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload: item
});