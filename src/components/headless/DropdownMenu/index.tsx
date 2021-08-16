import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Props } from './type'
import MenuButton from './MenuButton'
import DropdownMenuItemButton from './dropdownMenuItems/DropdownMenuItemButton'
import DropdownMenuItemLink from './dropdownMenuItems/DropdownMenuItemLink'
import DropdownMenuItemText from './dropdownMenuItems/DropdownMenuItemText'

export const Component = (props: Props): JSX.Element => {
  return (
    <Menu
      as="div"
      className={props.classNames?.base || 'relative inline-block'}
    >
      <MenuButton className={props.button.classNames?.base}>
        {props.button.children}
      </MenuButton>

      <Transition as={Fragment} {...props.itemsWrapperTransition?.classNames}>
        <Menu.Items
          className={
            props.itemsWrapper?.classNames?.base ||
            'absolute z-dropdownOption left-0 mt-2 w-full bg-white focus:outline-none'
          }
        >
          {props.items.map((item) => {
            if (item.elementType === 'button') {
              return (
                <DropdownMenuItemButton
                  key={item.key}
                  classNames={item.classNames}
                >
                  {item.children}
                </DropdownMenuItemButton>
              )
            } else if (item.elementType === 'link') {
              return (
                <DropdownMenuItemLink
                  key={item.key}
                  to={item.to || ''}
                  target={item.target}
                  classNames={item.classNames}
                >
                  {item.children}
                </DropdownMenuItemLink>
              )
            } else {
              return (
                <DropdownMenuItemText
                  key={item.key}
                  classNames={item.classNames}
                >
                  {item.children}
                </DropdownMenuItemText>
              )
            }
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Component
