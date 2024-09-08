import { Skeleton, Text } from '@radix-ui/themes';
import { usePokemonsTranslations } from 'i18n/hooks';
import React from 'react';

export interface PokemonDetailsRowProps {
  isLoading: boolean;
  value?: number | string;
  label: string;
}

const PokemonDetailsRow = ({ value, isLoading, label }: PokemonDetailsRowProps) => {
  const { t } = usePokemonsTranslations();

  return (
    <>
      <Text weight="bold" size="2">
        {label}:
      </Text>
      {isLoading ? (
        <Skeleton width="100px" height="14px" />
      ) : (
        <Text size="2">{value || t('None')}</Text>
      )}
    </>
  );
};

export default PokemonDetailsRow;
