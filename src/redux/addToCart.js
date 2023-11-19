import { createSlice } from "@reduxjs/toolkit";

export const addToCart = createSlice({
  name: "addTocart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    ADD_TO_CART: (state, action) => {
      let index = state.findIndex((i) => i.id === action.payload.pro.id);
      if (index < 0) {
        return (state = [...state, { ...action.payload.pro, quantity: 1 }]);
      } else {
        return (state = state.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        ));
      }
    },
    removeFromCart: (state, action) => {
      let ind = state.findIndex((i) => i.id === action.payload.pro.id);
      let id = state.map((i) => i.quantity);
      if (id < 1) {
        return (state = state.splice(ind, 1));
      } else {
        return (state = state.map((item, inx) =>
          inx === ind ? { ...item, quantity: item.quantity - 1 } : item
        ));
      }
    },
    deleteCart: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.pro.id
      );
      // remove from the array
      state.splice(index, 1);
    },
  },
});

export const { ADD_TO_CART } = addToCart.actions;
export const { removeFromCart } = addToCart.actions;
export const { deleteCart } = addToCart.actions;
export default addToCart.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const addToCart = createSlice({
//     name: "addToCart",
//     initialState: { cart: [] },
//     reducers: {
//         ADD_TO_CART: (state, action) => {
//             state.cart = state.cart.push(action.payload.pro)
//         }
//     }
// })

// export const { ADD_TO_CART } = addToCart.actions
// export default addToCart.reducer
