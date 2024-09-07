import httpClient from '../../httpClient';

import { Type } from './types';

export const baseUrl = '/type';

export const getType = (name: string) => {
  return httpClient.get<void, Type>(`${baseUrl}/${name}`);
};
