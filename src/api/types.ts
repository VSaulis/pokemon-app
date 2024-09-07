export interface ListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ListRequest {
  paging?: Paging;
}

export interface Paging {
  limit: number;
  offset: number;
}
