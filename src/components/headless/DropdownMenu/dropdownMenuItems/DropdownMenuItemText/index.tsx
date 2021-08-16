import React, { PropsWithChildren } from 'react'
import { Menu } from '@headlessui/react'
import { Props } from './type'

export const Component = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Menu.Item>
      <p className={props.classNames?.base || 'block w-full text-left'}>
        {props.children}
      </p>
    </Menu.Item>
  )
}

export default Component
