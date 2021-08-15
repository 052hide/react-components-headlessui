import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Props } from './type'
import MenuButton from './MenuButton'

export const Component: React.VFC<Props> = (props) => {
  return (
    <Menu
      as="div"
      className={props.classNames?.self || 'relative inline-block'}
    >
      <MenuButton className={props.classNames?.button}>
        {props.button}
      </MenuButton>

      <Transition as={Fragment} {...props.classNames?.items?.transition}>
        <Menu.Items
          className={
            props.classNames?.items?.content ||
            'absolute z-dropdownOption left-0 mt-2 w-full bg-white focus:outline-none'
          }
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
