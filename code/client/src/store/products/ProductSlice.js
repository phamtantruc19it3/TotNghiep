import { createSlice } from "@reduxjs/toolkit";
import {getNewProducts} from './AsyncActions'

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        newProducts:null,
        errorMessage:'',
    },
    reducers: {
    },
    // Code logic xử lý async action
    extraReducers: (builder) => {
        builder.addCase(getNewProducts.pending, (state) => {
            state.isLoading = true;
         });

        builder.addCase(getNewProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.newProducts = action.payload;
        });

        builder.addCase(getNewProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    }
})

// export const { increment, decrement, incrementByAmount } = ProductSlice.actions
export default ProductSlice.reducer