import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './cart/slice';
import pizzas from './slices/pizzasSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    pizzas,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
