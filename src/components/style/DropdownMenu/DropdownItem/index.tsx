import React, { PropsWithChildren } from 'react'
import DropdownMenuItemButton from '~/components/headless/DropdownMenu/dropdownMenuItems/DropdownMenuItemButton'
import DropdownMenuItemLink from '~/components/headless/DropdownMenu/dropdownMenuItems/DropdownMenuItemLink'
import DropdownMenuItemText from '~/components/headless/DropdownMenu/dropdownMenuItems/DropdownMenuItemText'
import { Props } from './type'

const Component = <T extends 'button' | 'link' | 'text'>(
  props: PropsWithChildren<Props<T>>
): JSX.Element => {
  if (props.elementType === 'button') {
    return (
      <DropdownMenuItemButton classNames={props.classNames}>
        {props.children}
      </DropdownMenuItemButton>
    )
  } else if (props.elementType === 'link') {
    return (
      <DropdownMenuItemLink
        to={props.to || ''}
        target={props.target}
        classNames={props.classNames}
      >
        {props.children}
      </DropdownMenuItemLink>
    )
  } else {
    return (
      <DropdownMenuItemText classNames={props.classNames}>
        {props.children}
      </DropdownMenuItemText>
    )
  }
}

export default Component
