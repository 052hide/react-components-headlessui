import { Key, ReactNode } from 'react'

export type Props<T> = {
  selectedValue: T | null
  defaultLabel: string
  items: {
    key: Key
    value: T
    children: ReactNode
    disabled: boolean
  }[]
  handleChange: (value: T | null) => void
}
