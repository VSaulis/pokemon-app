import { Paging } from 'api/types';

import { range } from './array';

export const getPaging = (page: number, pageSize: number): Paging => {
  const limit = pageSize;
  const offset = page * pageSize;
  return { limit, offset };
};

export const getPagingData = (page: number, pageSize: number, count: number) => {
  const pagesCount = Math.ceil(count / pageSize);
  const startPage = Math.max(Math.min(page - 2, pagesCount - 5), 0);
  const endPage = Math.min(Math.max(page + 2, 4), pagesCount - 1);
  const pages = range(startPage, endPage);
  return { pagesCount, pages };
};
