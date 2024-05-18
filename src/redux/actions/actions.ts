import {
  ADD_TO_CART,
  LOAD_PRODUCTS,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from './actionTypes';

export const loadProducts = item => ({
  type: LOAD_PRODUCTS,
  payload: item,
});

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const updateQuantity = item => ({
  type: UPDATE_QUANTITY,
  payload: item,
});

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  payload: item,
});
