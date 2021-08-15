import { Key, ReactNode } from 'react'

export type Props<T extends number | string> = {
  selectedValue: T | null
  defaultLabel: string
  items: {
    key: Key
    value: T
    label: ReactNode
    disabled: boolean
  }[]
  handleChange: (value: T | null) => void
}
