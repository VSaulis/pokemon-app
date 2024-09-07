import { useQuery } from '@tanstack/react-query';
import { PokemonsClient } from 'api/clients';
import { Paging } from 'api/types';

export const getQueryKey = (paging: Paging) => ['pokemons', paging];

const usePokemons = (paging: Paging) => {
  const { data, isLoading } = useQuery({
    queryKey: getQueryKey(paging),
    queryFn: () => PokemonsClient.getPokemons({ paging }),
  });

  return {
    pokemons: data?.results ?? [],
    count: data?.count ?? 0,
    isLoading,
  };
};

export default usePokemons;
