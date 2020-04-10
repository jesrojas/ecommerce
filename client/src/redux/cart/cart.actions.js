import { CartActionTypes } from './cart.types.js';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const changeCartHiddenIfTrueAction = () => ({
    type: CartActionTypes.CHANGE_CART_HIDDEN_IF_TRUE
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

export const updateCartFromFirebase = () => ({
    type: CartActionTypes.UPDATE_CART_FROM_FIREBASE
})

export const setCartFromFirebase = (cartItems) => ({
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems
})