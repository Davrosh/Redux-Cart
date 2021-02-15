// items
import cartItems from "./cart-items";

import { CLEAR_CART, GET_TOTALS, REMOVE, TOGGLE_AMOUNT } from "./actions";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === CLEAR_CART) {
    return { cart: [], total: 0, amount: 0 };
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
    return { cart, total, amount };
  }
  if (action.type === TOGGLE_AMOUNT) {
      let {cart, total, amount} = state;
      if(action.payload.toggle === 'inc') {
        
        cart = cart.map(item => {
            if(action.payload.id === item.id) {
                // total += item.price;
                // amount += 1;
                item.amount += 1;
            }
            return item;
        })
      }
      if(action.payload.toggle === 'dec') {
        cart = cart.map(item => {
            if(action.payload.id === item.id) {
                // total -= item.price;
                // amount -= 1;
                item.amount -= 1;
            }
            return item;
        })
      }

      return {cart, total, amount}
  } 
  if (action.type === GET_TOTALS) {
    let total = 0;
    let amount = 0;
    state.cart.forEach((item) => {
      total += item.price * item.amount;
      amount += item.amount;
    });
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount };
  }
  return state;
};

// initial state using default parameter
export default reducer;
