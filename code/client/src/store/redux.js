import { configureStore } from '@reduxjs/toolkit';
import appSlide from './appSlide';

export const store = configureStore({
  reducer: {
    app: appSlide
  },
});
