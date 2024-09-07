import { useQuery } from '@tanstack/react-query';
import { PokemonsClient } from 'api/clients';

export const getQueryKey = (name: string) => ['pokemon', name];

const usePokemon = (name: string) => {
  const { data, isLoading } = useQuery({
    queryKey: getQueryKey(name),
    queryFn: () => PokemonsClient.getPokemon(name),
  });

  return {
    pokemon: data,
    isLoading,
  };
};

export default usePokemon;
