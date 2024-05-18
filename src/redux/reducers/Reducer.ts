import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from '../actions/actionTypes';
import {LOAD_PRODUCTS} from '../actions/actionTypes';

const INITIAL_STATE = {
  products: [],
  cart: [],
};

interface ProductReducerState {
  products: Array<{
    id: number;
    image: string;
    title: string;
    price: string;
  }>;
  cart: Array<{
    id: number;
    image: string;
    title: string;
    price: string;
    quantity: number;
  }>;
}

export const Reducer = (state = INITIAL_STATE, action): ProductReducerState => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {...state, products: action.payload};
    case ADD_TO_CART:
      const isProductExist = state.cart.filter(
        item => item.id === action.payload.id,
      );
      if (isProductExist.length === 0) {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}],
        };
      } else {
        return {...state};
      }
    case UPDATE_QUANTITY:
      // const productsInCart = state.cart;
      // const newArray = productsInCart.filter(
      //   item => item.id !== action.payload.id,
      // );
      // return {...state, cart: [...newArray, action.payload]};
      return {...state, cart: action.payload};
    case REMOVE_FROM_CART:
      const currentCart = state.cart;
      const updatedCart = currentCart.filter(
        item => item.id !== action.payload,
      );
      return {...state, cart: updatedCart};

    default:
      return state;
  }
};
