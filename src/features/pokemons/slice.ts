import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultPageSize } from 'common/constants';

export interface PokemonsState {
  page: number;
  pageSize: number;
}

const initialState: PokemonsState = {
  page: 0,
  pageSize: defaultPageSize,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page;
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize;
    },
  },
});

export const { setPage, setPageSize } = pokemonsSlice.actions;
export const { reducer } = pokemonsSlice;
