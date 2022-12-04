import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Sort } from './filterSlice';

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://634338f73f83935a785146d5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}search=${search}`,
    );

    // if (data.length === 0) {
    //   return thunkAPI.rejectWithValue('Пиццы пустые');
    // } else {
    //   return thunkAPI.fulfillWithValue(data);
    // }
    return data;
  },
);

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum;
    //   }, 0);
    // },

    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    // для TypeScript
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
      console.log(action);
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
      console.log(action);
    });
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //     console.log(action);
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     state.status = 'error';
  //     state.items = [];
  //     console.log(action);
  //   },
  // },
});

export const selectPizzas = (state: RootState) => state.pizzas;
export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
