import { AbilitiesListItem } from '../abilities/types';
import { TypesListItem } from '../types/types';

export interface PokemonsListItem {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  name: string;
  base_experience: number;
  abilities: { ability: AbilitiesListItem }[];
  types: { type: TypesListItem }[];
}
