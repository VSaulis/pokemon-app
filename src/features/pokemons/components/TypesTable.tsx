import { ColumnDef } from '@tanstack/react-table';
import { Type } from 'api/clients/pokemons/types';
import { Table } from 'common/components';
import { usePokemonsTranslations } from 'i18n/hooks';
import React, { useMemo } from 'react';

export interface TypesTableProps {
  className?: string;
  types: Type[];
  isLoading: boolean;
}

const TypesTable = ({ className, types, isLoading }: TypesTableProps) => {
  const { t } = usePokemonsTranslations();

  const columns = useMemo<ColumnDef<Type>[]>(
    () => [
      {
        id: 'name',
        accessorKey: 'name',
        cell: (info) => info.getValue<string>(),
        header: () => t('Name'),
      },
    ],
    [t],
  );

  return <Table className={className} isLoading={isLoading} data={types} columns={columns} />;
};

export default TypesTable;
