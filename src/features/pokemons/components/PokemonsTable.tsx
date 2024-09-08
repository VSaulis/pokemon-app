import { ColumnDef } from '@tanstack/react-table';
import { PokemonsListItem } from 'api/clients/pokemons/types';
import { Link, Table } from 'common/components';
import { usePokemonsTranslations } from 'i18n/hooks';
import React, { useMemo } from 'react';

export interface PokemonsTableProps {
  className?: string;
  pokemons: PokemonsListItem[];
  isLoading: boolean;
}

const PokemonsTable = ({ className, pokemons, isLoading }: PokemonsTableProps) => {
  const { t } = usePokemonsTranslations();

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

  return (
    <Table className={className} isLoading={isLoading} data={pokemons} columns={columns} />
  );
};

export default PokemonsTable;
