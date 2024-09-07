import httpClient from '../../httpClient';
import { ListRequest, ListResponse } from '../../types';

import { Pokemon, PokemonsListItem } from './types';

const baseUrl = '/pokemon';

export const getPokemons = (request: ListRequest) => {
  const params = { ...request.paging };
  return httpClient.get<void, ListResponse<PokemonsListItem>>(baseUrl, { params });
};

export const getPokemon = (name: string) => {
  return httpClient.get<void, Pokemon>(`${baseUrl}/${name}`);
};
