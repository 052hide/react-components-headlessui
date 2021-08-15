import { Key, ReactNode } from 'react'
import type { TransitionClassNames } from '~/types/transition'
import type { Props as SelectOptionProps } from './SelectOption/type'

export type Item = SelectOptionProps<number | string> & {
  key: Key
  children: ReactNode
}

export type Props<T extends number | string> = {
  selectedValue: T | null
  classNames?: {
    base?: string
  }
  handleChange: (value: T | null) => void
  button: {
    children: ReactNode
    classNames?: {
      base?: string
    }
  }
  itemsWrapperTransition?: {
    classNames?: TransitionClassNames
  }
  itemsWrapper?: {
    classNames?: {
      base?: string
    }
  }
  items: Item[]
}
