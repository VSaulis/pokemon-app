import { Page } from 'common/components';
import { PokemonDetails } from 'features/pokemons/containers';
import { usePokemonsTranslations } from 'i18n/hooks';
import React from 'react';
import { useParams } from 'react-router-dom';

export type PokemonPageParams = { name: string };

const PokemonPage = () => {
  const { name } = useParams<PokemonPageParams>();
  const { t } = usePokemonsTranslations();

  return (
    <Page
      title={t('Pokemon details')}
      description={t('Here you will find information about pokemon')}
    >
      <PokemonDetails name={name as string} />
    </Page>
  );
};

export default PokemonPage;
