import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Props } from './type'
import MenuButton from './MenuButton'

export const DropdownMenu: React.VFC<Props> = (props) => {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton>Button</MenuButton>

      <Transition
        as={Fragment}
        // enter="transition ease-out duration-100"
        // enterFrom="transform opacity-0 scale-95"
        // enterTo="transform opacity-100 scale-100"
        // leave="transition ease-in duration-75"
        // leaveFrom="transform opacity-100 scale-100"
        // leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 left-0 min-w-[10rem] bg-white focus:outline-none">
          {props.items.map((item) => (
            <Fragment key={item.key}>{item.element}</Fragment>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownMenu
