import { Flex, Grid, Heading, Separator } from '@radix-ui/themes';
import { AbilitiesListItem } from 'api/clients/abilities/types';
import { TypesListItem } from 'api/clients/types/types';
import { Message } from 'common/components';
import { usePokemonsTranslations } from 'i18n/hooks';
import React, { useMemo } from 'react';

import { AbilitiesTable, PokemonDetailsRow, TypesTable } from '../components';
import { usePokemon } from '../hooks';

export interface PokemonDetailsProps {
  name: string;
}

const PokemonDetails = ({ name }: PokemonDetailsProps) => {
  const { pokemon, isLoading } = usePokemon(name);
  const { t } = usePokemonsTranslations();

  const types = useMemo<TypesListItem[]>(
    () => pokemon?.types.map(({ type }) => type) ?? [],
    [pokemon],
  );

  const abilities = useMemo<AbilitiesListItem[]>(
    () => pokemon?.abilities.map(({ ability }) => ability) ?? [],
    [pokemon],
  );

  if (!isLoading && !pokemon) {
    return <Message variant="danger" message={t('Pokemon is not found')} />;
  }

  return (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="2">
        <Heading color="gray" size="3" as="h3">
          {t('Details')}
        </Heading>
        <Separator size="4" />
        <Flex>
          <Grid columns="2" gap="2" align="center" width="100%">
            <PokemonDetailsRow isLoading={isLoading} value={pokemon?.name} label={t('Name')} />
            <PokemonDetailsRow
              isLoading={isLoading}
              value={pokemon?.weight}
              label={t('Weight')}
            />
            <PokemonDetailsRow
              isLoading={isLoading}
              value={pokemon?.height}
              label={t('Height')}
            />
            <PokemonDetailsRow
              isLoading={isLoading}
              value={pokemon?.base_experience}
              label={t('Base experience')}
            />
          </Grid>
        </Flex>
        <Separator size="4" />
      </Flex>
      <Flex direction="column" gap="2">
        <Heading color="gray" size="3" as="h3">
          {t('Types')}
        </Heading>
        <Separator size="4" />
        <TypesTable types={types} isLoading={isLoading} />
      </Flex>
      <Flex direction="column" gap="2">
        <Heading color="gray" size="3" as="h3">
          {t('Abilities')}
        </Heading>
        <Separator size="4" />
        <AbilitiesTable abilities={abilities} isLoading={isLoading} />
      </Flex>
    </Flex>
  );
};

export default PokemonDetails;
