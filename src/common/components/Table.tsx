import { Table as RadixTable, Text } from '@radix-ui/themes';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useCommonTranslations } from 'i18n/hooks';

import Spinner from './Spinner';

export interface TableProps<T> {
  className?: string;
  data: T[];
  columns: ColumnDef<T>[];
  isLoading: boolean;
}

const Table = <T,>({ columns, data, isLoading }: TableProps<T>) => {
  const { t } = useCommonTranslations();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <RadixTable.Root layout="fixed" variant="surface">
      <RadixTable.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <RadixTable.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <RadixTable.ColumnHeaderCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </RadixTable.ColumnHeaderCell>
            ))}
          </RadixTable.Row>
        ))}
      </RadixTable.Header>
      <RadixTable.Body>
        {isLoading && (
          <RadixTable.Row>
            <RadixTable.Cell align="center" colSpan={columns.length}>
              <Spinner />
            </RadixTable.Cell>
          </RadixTable.Row>
        )}
        {!isLoading && data.length === 0 && (
          <RadixTable.Row>
            <RadixTable.Cell align="center" colSpan={columns.length}>
              <Text color="gray">{t('No results found')}</Text>
            </RadixTable.Cell>
          </RadixTable.Row>
        )}
        {table.getRowModel().rows.map((row) => (
          <RadixTable.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <RadixTable.Cell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </RadixTable.Cell>
            ))}
          </RadixTable.Row>
        ))}
      </RadixTable.Body>
    </RadixTable.Root>
  );
};

export default Table;
