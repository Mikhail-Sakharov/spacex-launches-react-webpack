export enum SortType {
  Date = 'date_utc'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export interface QueryArgs {
  query?: {
    date_utc?: {
      $gte?: string,
      $lte?: string
    },
    success?: boolean
  },
  options?: {
    sort?: {
      date_utc?: SortOrder
    },
    limit?: number
  }
}
