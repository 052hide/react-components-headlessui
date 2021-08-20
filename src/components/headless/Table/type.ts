import { ReactNode } from 'react'

export type Props = {
  configColumns: {
    key: string
    width: number
    fixed?: {
      position: 'left' | 'right'
      margin: number
    }
  }[]
  headerColumns: {
    [key: string]: ReactNode
  }
  rows: {
    key: string
    columns: {
      [key: string]: ReactNode
    }
  }[]
}
