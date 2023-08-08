import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // here name used is reducers not reducer as in configureStore as in createSlice we make multiple reducer but configureStore ahs only 1 reducer which contain different reducers
    addItem: (state, action) => {
      // addItem is an action and the function is the reducer function SO key here is an action and value to that key is a function and that function is a reducer function.
      // It takes 2 parameter action and the state and it modify the state according to the action passed.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // we dnt need action here so we can skip that in parameter
      state.items.length = 0; // []
      //   state=[]   we cnt do this because we are not mutating the state we are just giving the reference and not mutating so it wont work also. It will just make out local state empty not the main above state.

      //   or we can do this also return {items:[]}
      // either mutate the existing state or return the new state redux toolkit says this. SO state.items.length = 0 and return {items:[]} both are correct.
    },
  },
});

/* These two export below are the syntax as createSlice we return an bog object which will look like

{
    actions: {
        addItem,
        removeItem,
        clearItem
    },
    reducer: {
        reducers will be here
    }
}

this will be return by createSlice to our input provided as argument. so we are exporting this below.


*/
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

/* HERE WE HAVE MADE AN SLICE NOW WE WILL ADD THIS SLICE TO OUR STORE IN configureStore, initially it was empty that is configureStore({}) */
