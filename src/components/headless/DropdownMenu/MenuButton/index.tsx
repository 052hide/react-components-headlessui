import React from 'react'
import { Menu } from '@headlessui/react'

export const MenuButton: React.FC = (props) => {
  return <Menu.Button>{props.children}</Menu.Button>
}

export default MenuButton
