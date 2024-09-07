import { Page } from 'common/components';
import { PokemonsTable } from 'features/pokemons/containers';
import { usePokemonsTranslations } from 'i18n/hooks';
import React from 'react';

const PokemonsPage = () => {
  const { t } = usePokemonsTranslations();

  return (
    <Page
      title={t('Pokemons')}
      description={t(
        "Welcome to the Pokémon list page! Here, you'll find all available Pokemons",
      )}
    >
      <PokemonsTable />
    </Page>
  );
};

export default PokemonsPage;
