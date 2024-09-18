import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type ProductsInCartType = {
    [id: number]: number
}

const initialState: ProductsInCartType = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),
        removeProductFromCart: (prevState, action) =>
            omit(prevState, action.payload),

        changeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.quantity,
        }),
    },
})

export const {
    addProductToCart,
    removeProductFromCart,
    changeProductQuantity,
} = cartSlice.actions

export default cartSlice.reducer
