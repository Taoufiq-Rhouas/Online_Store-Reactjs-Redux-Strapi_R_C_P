import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: ['item'],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Actions
    addToCart: (state, action) => {
      state.products.push(action.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer