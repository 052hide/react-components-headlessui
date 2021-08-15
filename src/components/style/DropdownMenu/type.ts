import { Key, ReactNode } from 'react'

export type Props = {
  button: ReactNode
  items: {
    key: Key
    element: ReactNode
  }[]
}
