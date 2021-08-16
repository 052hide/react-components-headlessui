import React, { PropsWithChildren } from 'react'
import { Menu } from '@headlessui/react'
import { Props } from './type'

export const Component = (props: PropsWithChildren<Props>): JSX.Element => {
  return <Menu.Button className={props.className}>{props.children}</Menu.Button>
}

export default Component
