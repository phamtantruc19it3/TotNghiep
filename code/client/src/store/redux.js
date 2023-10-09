import { configureStore } from '@reduxjs/toolkit';
import appSlide from './app/appSlide';
import productSlice from './products/ProductSlice';
import userSlice from './user/userSlice';
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'


const commonConfig= {
  key: 'shop/user',
  storage
}
const userconfig ={
  ...commonConfig,
  whilelist:['isLoggedIn','token']
}

export const store = configureStore({
  reducer: {
    app: appSlide,
    products:productSlice,
    user: persistReducer(userconfig,userSlice)
  },
});

export const persistor= persistStore(store)
