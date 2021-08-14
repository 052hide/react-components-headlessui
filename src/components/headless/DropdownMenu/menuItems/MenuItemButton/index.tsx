import React from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '~/helpers/css'

export const MenuItemText: React.FC = (props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={classNames([
            'block w-full text-left',
            active ? 'bg-gray-100' : '',
          ])}
        >
          {props.children}
        </button>
      )}
    </Menu.Item>
  )
}

export default MenuItemText
