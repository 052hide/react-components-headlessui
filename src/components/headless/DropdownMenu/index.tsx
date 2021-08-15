import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'
import MenuButton from './MenuButton'

export const Component: React.VFC<Props> = (props) => {
  return (
    <Menu
      as="div"
      className={classNames([
        'relative inline-block',
        props.classNames?.self || '',
      ])}
    >
      <MenuButton className={props.classNames?.button}>Button</MenuButton>

      <Transition as={Fragment} {...props.classNames?.items?.transition}>
        <Menu.Items
          className={classNames([
            'absolute mt-2 left-0 w-full bg-white focus:outline-none',
            props.classNames?.items?.content || '',
          ])}
        >
          {props.items.map((item) => (
            <Fragment key={item.key}>{item.element}</Fragment>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Component
