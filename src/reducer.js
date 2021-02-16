// items
import cartItems from "./cart-items";

import {
  CLEAR_CART,
  ERROR_DISPLAY_ITEMS,
  GET_TOTALS,
  LOADING,
  NOT_LOADING,
  RECEIVE_DISPLAY_ITEMS,
  REMOVE,
  TOGGLE_AMOUNT,
} from "./actions";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], total: 0, amount: 0 };
  }
  if (action.type === REMOVE) {
    const { id } = action.payload;
    let { cart, total, amount } = state;
    cart = cart.filter((item) => {
      if (item.id === id) {
        // total -= item.price * item.amount;
        // amount -= item.amount;
        return false;
      }
      return true;
    });
    return { ...state, cart, total, amount };
  }
  if (action.type === TOGGLE_AMOUNT) {
    let { cart, total, amount } = state;
    if (action.payload.toggle === "inc") {
      cart = cart.map((item) => {
        if (action.payload.id === item.id) {
          // total += item.price;
          // amount += 1;
          item.amount += 1;
        }
        return item;
      });
    }
    if (action.payload.toggle === "dec") {
      cart = cart.map((item) => {
        if (action.payload.id === item.id) {
          // total -= item.price;
          // amount -= 1;
          item.amount -= 1;
        }
        return item;
      });
    }

    return { ...state, cart, total, amount };
  }
  if (action.type === GET_TOTALS) {
    let total = 0;
    let amount = 0;
    state.cart.forEach((item) => {
      total += item.price * item.amount;
      amount += item.amount;
    });
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === NOT_LOADING) {
    return { ...state, loading: false };
  }
  if (action.type === RECEIVE_DISPLAY_ITEMS) {
    return { ...state, cart: action.payload.cart };
  }
  if(action.type === ERROR_DISPLAY_ITEMS) {
    return {...state, error: true};
  }

  return state;
};

// initial state using default parameter
export default reducer;
