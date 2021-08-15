import React from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'

export const Component: React.FC<Props> = (props) => {
  return (
    <Menu.Item>
      <p
        className={classNames([
          'block w-full text-left',
          props.className || '',
        ])}
      >
        {props.children}
      </p>
    </Menu.Item>
  )
}

export default Component
