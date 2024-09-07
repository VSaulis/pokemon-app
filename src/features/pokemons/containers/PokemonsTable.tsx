import { Flex } from '@radix-ui/themes';
import { ColumnDef } from '@tanstack/react-table';
import { PokemonsListItem } from 'api/clients/pokemons/types';
import { Paging } from 'api/types';
import { Link, Pagination, Table } from 'common/components';
import { useAppDispatch, useAppSelector } from 'core/store/store';
import { usePokemonsTranslations } from 'i18n/hooks';
import React, { useCallback, useMemo } from 'react';
import { getPaging } from 'utils/paging';

import { usePokemons } from '../hooks';
import { selectPage, selectPageSize } from '../selectors';
import { setPage } from '../slice';

const PokemonsTable = () => {
  const dispatch = useAppDispatch();
  const { t } = usePokemonsTranslations();
  const pageSize = useAppSelector(selectPageSize);
  const page = useAppSelector(selectPage);
  const paging = useMemo<Paging>(() => getPaging(page, pageSize), [page, pageSize]);
  const { pokemons, count, isLoading } = usePokemons(paging);

  const columns = useMemo<ColumnDef<PokemonsListItem>[]>(
    () => [
      {
        id: 'name',
        accessorKey: 'name',
        cell: (info) => info.getValue<string>(),
        header: () => t('Name'),
      },
      {
        id: 'actions',
        accessorKey: 'name',
        cell: (info) => <Link to={`/${info.getValue()}`}>{t('Details')} </Link>,
        header: () => t('Actions'),
      },
    ],
    [t],
  );

  const handleOnPageChange = useCallback(
    (page: number) => {
      dispatch(setPage({ page }));
      window.scrollTo(0, 0);
    },
    [dispatch],
  );

  return (
    <Flex gap="3" direction="column">
      <Table isLoading={isLoading} data={pokemons} columns={columns} />
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
