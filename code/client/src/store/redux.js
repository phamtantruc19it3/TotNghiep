import { configureStore } from '@reduxjs/toolkit';
import appSlide from './app/appSlide';
import productSlice from './products/ProductSlice';

export const store = configureStore({
  reducer: {
    app: appSlide,
    products:productSlice,
  },
});
