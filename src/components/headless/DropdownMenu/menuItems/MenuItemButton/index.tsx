import React from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'

export const Component: React.FC<Props> = (props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={classNames([
            'block w-full text-left',
            active ? 'bg-gray-100' : '',
            props.className || '',
          ])}
        >
          {props.children}
        </button>
      )}
    </Menu.Item>
  )
}

export default Component
