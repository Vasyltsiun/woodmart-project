import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likeSlice'
import cartSlice from './cartSlice'
import wishSlice from './wishSlice'

export const store = configureStore({
    reducer: {
        productsLikeState: likeSlice,
        productsInCart: cartSlice,
        ProductsInWishlist: wishSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
