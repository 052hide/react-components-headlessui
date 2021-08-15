import React from 'react'
import { Menu } from '@headlessui/react'
import { Props } from './type'

export const Component: React.FC<Props> = (props) => {
  return <Menu.Button className={props.className}>{props.children}</Menu.Button>
}

export default Component
