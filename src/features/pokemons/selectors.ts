import { RootState } from 'core/store/store';

export const selectPage = (state: RootState) => {
  return state.pokemons.page;
};

export const selectPageSize = (state: RootState) => {
  return state.pokemons.pageSize;
};
