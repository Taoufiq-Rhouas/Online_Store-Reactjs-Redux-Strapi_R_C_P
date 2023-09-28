import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Actions
    addToCart: (state, action) => {
        const product = state.products.find(item => item.id == action.payload.id)
        !product && state.products.push(action.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer