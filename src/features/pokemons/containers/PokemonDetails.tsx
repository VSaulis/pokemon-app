import { Box, Card, Flex, Separator, Text } from '@radix-ui/themes';
import { usePokemonsTranslations } from 'i18n/hooks';
import React from 'react';

import { usePokemon } from '../hooks';

export interface PokemonDetailsProps {
  name: string;
}

const PokemonDetails = ({ name }: PokemonDetailsProps) => {
  const { pokemon } = usePokemon(name);
  const { t } = usePokemonsTranslations();

  if (!pokemon) return <></>;

  return (
    <Flex>
      <Box minWidth="30vw">
        <Card>
          <Flex align="center" gap="4">
            <Flex align="center" flexGrow="1" direction="column">
              <Text weight="bold">{t('Name')}</Text>
              <Text>{pokemon.name}</Text>
            </Flex>
            <Separator size="2" orientation="vertical" />
            <Flex align="center" flexGrow="1" direction="column">
              <Text weight="bold">{t('Height')}</Text>
              <Text>{pokemon.height}</Text>
            </Flex>
            <Separator size="2" orientation="vertical" />
            <Flex align="center" flexGrow="1" direction="column">
              <Text weight="bold">{t('Width')}</Text>
              <Text>{pokemon.weight}</Text>
            </Flex>
            <Separator size="2" orientation="vertical" />
            <Flex align="center" flexGrow="1" direction="column">
              <Text weight="bold">{t('Experience')}</Text>
              <Text>{pokemon.base_experience}</Text>
            </Flex>
          </Flex>
        </Card>
      </Box>
      <Flex flexGrow="1"></Flex>
    </Flex>
  );
};

export default PokemonDetails;
