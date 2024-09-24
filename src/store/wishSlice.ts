import { createSlice } from '@reduxjs/toolkit'
type ProductsInWishlist = {
    [id: number]: number
}
const initialState: ProductsInWishlist = {}
export const wishSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToWishlist: (prevState, action) => ({
            ...prevState,
            [action.payload.id]: prevState[action.payload.id],
        }),
    },
})
export const { addProductToWishlist } = wishSlice.actions
export default wishSlice.reducer
