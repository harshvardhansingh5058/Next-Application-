import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (existingItem) {
                if (existingItem.quantity == 5) {
                    toast.error('Max quantity reached')
                } else {
                    existingItem.quantity++
                    toast.success('Update Quantity')
                }
            } else {
                const cartData = {
                    ...action.payload,
                    quantity: 1,
                };
                const finalData = [cartData, ...state.cartItems];
                state.cartItems = finalData;
                toast.success('Add To Cart');
            }

            Cookies.set('cartItems', JSON.stringify(state.cartItems));
        },
        deleteCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

            toast.success('Product Remove from Cart')
                Cookies.set('cartItems', JSON.stringify(state.cartItems));
        },
        increaseCartQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload)
            if (item) {
                item.quantity++
                toast.success('Quantity Updated');
                Cookies.set('cartItems', JSON.stringify(state.cartItems));
            }
        },
        decreaseCartQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload)
            if (item) {
                item.quantity--
                toast.success('Quantity Updated');
                Cookies.set('cartItems', JSON.stringify(state.cartItems));
            }
        },
        // new: lets you load cookie data client-side after mount
        setCartFromCookie: (state, action) => {
            state.cartItems = action.payload;
        },
    },
});

export const {
    addToCart, deleteCart, increaseCartQuantity, decreaseCartQuantity, setCartFromCookie,
} = cartSlice.actions;
export default cartSlice.reducer;