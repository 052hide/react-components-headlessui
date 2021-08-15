import { Key, ReactNode } from 'react'
import type { TransitionClassNames } from '~/types/transition'

export type Item = {
  key: Key
  children: ReactNode
  elementType: 'button' | 'link' | 'text'
  to?: string
  target?: '_blank'
  classNames?: {
    base?: string
    active?: string
  }
}

export type Props = {
  classNames?: {
    base?: string
  }
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
