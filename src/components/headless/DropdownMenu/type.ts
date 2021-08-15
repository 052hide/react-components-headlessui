import { Key, ReactNode } from 'react'
import type { TransitionClassNames } from '~/types/transition'

export type Props = {
  items: {
    key: Key
    element: ReactNode
  }[]
  classNames?: {
    self?: string
    button?: string
    items?: {
      transition?: TransitionClassNames
      content?: string
    }
  }
}
