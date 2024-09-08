export interface PokemonsListItem {
  name: string;
  url: string;
}

export interface Ability {
  name: string;
  url: string;
}

export interface Type {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  name: string;
  base_experience: number;
  abilities: { ability: Ability }[];
  types: { type: Type }[];
}
