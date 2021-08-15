import React from 'react'
import DropdownMenu from '~/components/headless/DropdownMenu'
import { Props } from './type'

const Component: React.FC<Props> = (props): JSX.Element => {
  return (
    <DropdownMenu
      button={props.button}
      items={props.items}
      classNames={{
        button:
          'w-full inline-flex justify-center py-2 px-4 rounded border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-900 transition-colors duration-150 hover:bg-gray-50 focus:outline-none focus:bg-gray-100',
        items: {
          transition: {
            enter: 'transition ease-out duration-100',
            enterFrom: 'transform opacity-0 scale-95',
            enterTo: 'transform opacity-100 scale-100',
            leave: 'transition ease-in duration-75',
            leaveFrom: 'transform opacity-100 scale-100',
            leaveTo: 'transform opacity-0 scale-95',
          },
          content:
            'absolute z-dropdownOption left-0 mt-2 min-w-[14rem] max-w-full rounded-md shadow-lg bg-white focus:outline-none',
        },
      }}
    />
  )
}

export default Component
