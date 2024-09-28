import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from '../counterSlice';
import counterSlice from '../../counterSlice';
import cartSlice from '../../cartSlice';
export const store = configureStore({
  reducer: {
    counterShravan: counterSlice,
    cart: cartSlice,
  },
});