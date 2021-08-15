import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Props } from './type'
import SelectOption from './SelectOption'

export const Component = <T extends number | string>(
  props: Props<T>
): JSX.Element => {
  const selectedLabel = () => {
    return props.selectedValue
      ? props.items.find((item) => item.value === props.selectedValue)
          ?.children || props.button.children
      : props.button.children
  }

  return (
    <Listbox
      as="div"
      value={props.selectedValue}
      onChange={props.handleChange}
      className={props.classNames?.base || 'relative inline-block'}
    >
      <Listbox.Button className={props.button.classNames?.base || 'text-left'}>
        {selectedLabel()}
      </Listbox.Button>
      <Transition as={Fragment} {...props.itemsWrapperTransition?.classNames}>
        <Listbox.Options
          className={
            props.itemsWrapper?.classNames?.base ||
            'absolute z-dropdownOption left-0  mt-2 min-w-[10rem] bg-white focus:outline-none'
          }
        >
          {props.items.map((item) => (
            <SelectOption
              key={item.key}
              value={item.value}
              disabled={item.disabled}
              classNames={item.classNames}
            >
              {item.children}
            </SelectOption>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}

export default Component
