import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Props } from './type'
import SelectOption from './SelectOption'

export const Component = <T extends number | string>(
  props: Props<T>
): JSX.Element => {
  const selectedLabel = () => {
    return (
      props.items.find((item) => item.value === props.selectedValue)
        ?.children || props.defaultLabel
    )
  }

  return (
    <Listbox
      as="div"
      value={props.selectedValue}
      onChange={props.handleChange}
      className={props.classNames?.self || 'relative inline-block'}
    >
      <Listbox.Button className={props.classNames?.button || 'text-left'}>
        {selectedLabel()}
      </Listbox.Button>
      <Transition as={Fragment} {...props.classNames?.items?.transition}>
        <Listbox.Options
          className={
            props.classNames?.items?.content ||
            'absolute z-dropdownOption left-0  mt-2 min-w-[10rem] bg-white focus:outline-none'
          }
        >
          {props.items.map((item) => (
            <SelectOption
              key={item.key}
              value={item.value}
              disabled={item.disabled}
              classNames={{
                base: props.classNames?.item?.base,
                selected: props.classNames?.item?.selected,
                active: props.classNames?.item?.active,
                disabled: props.classNames?.item?.disabled,
              }}
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
