import { ColumnDef } from '@tanstack/react-table';
import { AbilitiesListItem } from 'api/clients/abilities/types';
import { Table } from 'common/components';
import { usePokemonsTranslations } from 'i18n/hooks';
import React, { useMemo } from 'react';

export interface AbilitiesTableProps {
  className?: string;
  abilities: AbilitiesListItem[];
  isLoading: boolean;
}

const AbilitiesTable = ({ className, abilities, isLoading }: AbilitiesTableProps) => {
  const { t } = usePokemonsTranslations();

  const columns = useMemo<ColumnDef<AbilitiesListItem>[]>(
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

  return (
    <Table className={className} isLoading={isLoading} data={abilities} columns={columns} />
  );
};

export default AbilitiesTable;
