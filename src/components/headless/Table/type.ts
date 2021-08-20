import { ReactNode } from 'react'
import { RequireOne } from '~/types/common'

type ColumnValue<
  V extends string | number | boolean = string | number | boolean,
  F extends 'date' | 'datetime' | 'array' = 'date' | 'datetime' | 'array'
> = RequireOne<{
  children?: ReactNode
  value?: F extends 'date' | 'datetime' ? number : V
}>

type Column<
  V extends string | number | boolean = string | number | boolean,
  F extends 'date' | 'datetime' | 'array' = 'date' | 'datetime' | 'array'
> = ColumnValue<V, F> & {
  format?: F
}

type Columns = {
  [key: string]: Column
}

export type Row = {
  key: string
  columns: Columns
}

export type Props = {
  configColumns: {
    key: string
    width: number
    fixed?: {
      position: 'left' | 'right'
      margin: number
    }
  }[]
  headerColumns: Columns
  rows: Row[]
}
