import { Key, ReactNode } from 'react'
import type { TransitionClassNames } from '~/types/transition'

export type Props<T extends number | string> = {
  selectedValue: T | null
  defaultLabel: string
  items: {
    key: Key
    value: T
    disabled: boolean
    children: ReactNode
  }[]
  classNames?: {
    self?: string
    button?: string
    items?: {
      transition?: TransitionClassNames
      content?: string
    }
    item?: {
      base?: string
      selected?: string
      active?: string
      disabled?: string
    }
  }
  handleChange: (value: T | null) => void
}
