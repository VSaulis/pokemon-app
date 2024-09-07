import httpClient from '../../httpClient';

import { Ability } from './types';

export const baseUrl = '/ability';

export const getAbility = (name: string) => {
  return httpClient.get<void, Ability>(`${baseUrl}/${name}`);
};
