import { createSlice } from "@reduxjs/toolkit";
import productData from "../../productData";
// InitialState
let initialState = {
  cart: [], //  Cart Array
  items: productData, // it is the Data comming from json
  totalQuantity: 0,
  totalPrice: 0
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      let find = state.cart.findIndex((el) => el.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          //console.log("carttotal", cartTotal);
          // console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          //console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0
        }
      );
      state.totalPrice = +totalPrice.toFixed(2);
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
  }
});
export const {
  addTocart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer;
