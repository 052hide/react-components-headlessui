import React, { PropsWithChildren } from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'

export const Component = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={classNames([
            props.classNames?.base || 'block w-full text-left',
            active ? props.classNames?.active || '' : '',
          ])}
        >
          {props.children}
        </button>
      )}
    </Menu.Item>
  )
}

export default Component
