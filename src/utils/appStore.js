import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // we are just importing whole cartSlice with different name(cartReducer) here.

const appStore = configureStore({
  reducer: {
    // here term is reducer not reducers as in createSlice as it is one big reducer for store which contain different reducers but for store it has only 1 reducer
    cart: cartReducer,
    // user: userReducer,
  },
});

export default appStore;

/* in this configureStore big object we will add different small reducers */
