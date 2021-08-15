import React from 'react'
import SelectListbox from '~/components/headless/SelectListbox'
import { Props } from './type'

const Component = <T extends number | string>(props: Props<T>): JSX.Element => {
  return (
    <SelectListbox
      selectedValue={props.selectedValue}
      classNames={{
        base: '',
      }}
      button={{
        ...props.button,
        classNames: {
          base: 'w-full inline-flex justify-center py-2 px-4 rounded border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-900 transition-colors duration-150 hover:bg-gray-50 focus:outline-none focus:bg-gray-100',
        },
      }}
      handleChange={props.handleChange}
      itemsWrapperTransition={{
        classNames: {
          enter: 'transition ease-out duration-100',
          enterFrom: 'transform opacity-0 scale-95',
          enterTo: 'transform opacity-100 scale-100',
          leave: 'transition ease-in duration-75',
          leaveFrom: 'transform opacity-100 scale-100',
          leaveTo: 'transform opacity-0 scale-95',
        },
      }}
      itemsWrapper={{
        classNames: {
          base: 'absolute z-dropdownOption left-0 mt-2 min-w-[14rem] max-w-full rounded-md shadow-lg bg-white focus:outline-none',
        },
      }}
      items={props.items.map((item) => ({
        ...item,
        classNames: {
          base: 'w-full block py-2 px-4 text-sm text-left transition-colors duration-150',
          selected: 'text-blue-800',
          active: 'bg-blue-100',
          disabled: 'bg-gray-100 opacity-50',
        },
      }))}
    />
  )
}

export default Component
