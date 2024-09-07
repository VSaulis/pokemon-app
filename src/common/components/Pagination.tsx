import { Flex, Text } from '@radix-ui/themes';
import { useCommonTranslations } from 'i18n/hooks';
import { useMemo } from 'react';
import { getPagingData } from 'utils/paging';

import Button from './Button';

export interface PaginationProps {
  className?: string;
  onPageChange: (page: number) => void;
  isDisabled?: boolean;
  page: number;
  pageSize: number;
  count: number;
}

const Pagination = ({
  className,
  onPageChange,
  page,
  pageSize,
  count,
  isDisabled,
}: PaginationProps) => {
  const { t } = useCommonTranslations();

  const { pages, pagesCount } = useMemo(
    () => getPagingData(page, pageSize, count),
    [count, pageSize, page],
  );

  const isFirstPage = page === 0;
  const isLastPage = page === pagesCount - 1;

  return (
    <Flex gap="4" align="center" className={className}>
      <Flex align="center" flexGrow="1" gap="1">
        <Text color="gray">{t('Total')}:</Text>
        <Text weight="bold">{count}</Text>
      </Flex>
      <Flex gap="1" align="center">
        <Button disabled={isDisabled || isFirstPage} onClick={() => onPageChange(0)}>
          {t('First')}
        </Button>
        <Button disabled={isDisabled || isFirstPage} onClick={() => onPageChange(page - 1)}>
          {t('Previous')}
        </Button>
        {pages.map((i) => (
          <Button key={i} disabled={isDisabled || i === page} onClick={() => onPageChange(i)}>
            {i + 1}
          </Button>
        ))}
        <Button disabled={isDisabled || isLastPage} onClick={() => onPageChange(page + 1)}>
          {t('Next')}
        </Button>
        <Button
          disabled={isDisabled || isLastPage}
          onClick={() => onPageChange(pagesCount - 1)}
        >
          {t('Last')}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
