import { ReactNode } from 'react'
import { RequireOne } from '~/types/common'

type ColumnValue<
  V extends string | number | boolean = string | number | boolean
> = RequireOne<{
  children?: ReactNode
  value?: V
}>

export type Column<
  V extends string | number | boolean = string | number | boolean,
  F extends 'date' | 'datetime' | 'array' = 'date' | 'datetime' | 'array'
> = ColumnValue<V> & {
  format?: F
  classNames?: {
    base: string
  }
}

export type Columns = {
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
  headerFixed: boolean
  headerColumns: Columns
  rows: Row[]
}
