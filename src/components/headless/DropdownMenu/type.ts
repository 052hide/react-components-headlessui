import { Key, ReactNode } from 'react'

export type Props = {
  items: {
    key: Key
    element: ReactNode
  }[]
}
