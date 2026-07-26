import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const initialState = {
    wishlistItems: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishlist: (state, action) => {
            const exists  = state.wishlistItems.some((item) => item.id === action.payload.id)
            if(exists){
                state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload.id)
                toast.success('Remove form Wishlist')
            }else{
                const wishlistData = {...action.payload}
                const finalData = [wishlistData, ...state.wishlistItems]
                state.wishlistItems = finalData
                toast.success('Added to Wishlist')
            }
        },
        clearWishlist: (state, action) => {
            state.wishlistItems = []
        },
        setWishlistFromCookie: (state, action) => {
            state.wishlistItems = action.payload;
        },
    },
});

export const {
    toggleWishlist, clearWishlist, setWishlistFromCookie, } = wishlistSlice.actions;
export default wishlistSlice.reducer;