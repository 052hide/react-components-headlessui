import React from 'react'
import { Menu } from '@headlessui/react'

export const MenuItemText: React.FC = (props) => {
  return (
    <Menu.Item>
      <p className="block w-full text-left">{props.children}</p>
    </Menu.Item>
  )
}

export default MenuItemText
