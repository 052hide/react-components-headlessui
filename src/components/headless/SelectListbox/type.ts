import { Key, ReactNode } from 'react'
import type { TransitionClassNames } from '~/types/transition'

export type Props<T extends number | string> = {
  selectedValue: T | null
  defaultLabel: string
  items: {
    key: Key
    value: T
    label: ReactNode
    disabled: boolean
  }[]
  classNames?: {
    self?: string
    button?: string
    items?: {
      transition?: TransitionClassNames
      content?: string
    }
  }
  handleChange: (value: T | null) => void
}
