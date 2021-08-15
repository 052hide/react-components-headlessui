import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Props } from './type'

export const SelectListbox = <T extends number | string>(
  props: Props<T>
): JSX.Element => {
  const selectedLabel = () => {
    return (
      props.items.find((item) => item.value === props.selectedValue)?.label ||
      props.defaultLabel
    )
  }

  return (
    <div className="relative inline-block">
      <Listbox value={props.selectedValue} onChange={props.handleChange}>
        <Listbox.Button className="text-left">{selectedLabel()}</Listbox.Button>
        <Transition
          as={Fragment}
          // enter="transition duration-100 ease-out"
          // enterFrom="transform scale-95 opacity-0"
          // enterTo="transform scale-100 opacity-100"
          // leave="transition duration-75 ease-out"
          // leaveFrom="transform scale-100 opacity-100"
          // leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute mt-2 left-0 min-w-[10rem] bg-white focus:outline-none">
            {props.items.map((item) => (
              <Listbox.Option
                key={item.key}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

export default SelectListbox
