import { Flex } from '@radix-ui/themes';
import { Paging } from 'api/types';
import { Pagination } from 'common/components';
import { useAppDispatch, useAppSelector } from 'core/store/store';
import React, { useCallback, useMemo } from 'react';
import { getPaging } from 'utils/paging';

import { PokemonsTable as ControlledPokemonsTable } from '../components';
import { usePokemons } from '../hooks';
import { selectPage, selectPageSize } from '../selectors';
import { setPage } from '../slice';

const PokemonsTable = () => {
  const dispatch = useAppDispatch();
  const pageSize = useAppSelector(selectPageSize);
  const page = useAppSelector(selectPage);
  const paging = useMemo<Paging>(() => getPaging(page, pageSize), [page, pageSize]);
  const { pokemons, count, isLoading } = usePokemons(paging);

  const handleOnPageChange = useCallback(
    (page: number) => {
      dispatch(setPage({ page }));
      window.scrollTo(0, 0);
    },
    [dispatch],
  );

  return (
    <Flex gap="3" direction="column">
      <ControlledPokemonsTable isLoading={isLoading} pokemons={pokemons} />
      <Pagination
        onPageChange={handleOnPageChange}
        count={count}
        isDisabled={isLoading}
        pageSize={pageSize}
        page={page}
      />
    </Flex>
  );
};

export default PokemonsTable;
