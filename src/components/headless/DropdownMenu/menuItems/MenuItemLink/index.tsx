import React from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'

export const MenuItemText: React.FC<Props> = (props) => {
  const targetAttributes =
    props.target === '_blank'
      ? {
          target: '_blank',
          rel: 'noreferrer',
        }
      : {}

  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={props.to}
          {...targetAttributes}
          className={classNames([
            'block w-full text-left',
            active ? 'bg-gray-100' : '',
          ])}
        >
          {props.children}
        </a>
      )}
    </Menu.Item>
  )
}

export default MenuItemText
