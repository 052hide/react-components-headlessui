import React, { useState } from 'react'
import type { Nullable } from '~/types/common'
import DropdownMenu from '~/components/headless/DropdownMenu'
import MenuItemText from '~/components/headless/DropdownMenu/menuItems/MenuItemText'
import MenuItemButton from '~/components/headless/DropdownMenu/menuItems/MenuItemButton'
import MenuItemLink from '~/components/headless/DropdownMenu/menuItems/MenuItemLink'
import SelectListbox from '~/components/headless/SelectListbox'

const App: React.FC = (): JSX.Element => {
  const dropdownItemClassName = () => {
    return 'block px-4 py-2 text-sm'
  }
  const dropdownItems = [
    {
      key: 1,
      element: (
        <MenuItemText className={dropdownItemClassName()}>AAAA</MenuItemText>
      ),
    },
    {
      key: 2,
      element: (
        <MenuItemButton className={dropdownItemClassName()}>
          BBBB
        </MenuItemButton>
      ),
    },
    {
      key: 3,
      element: (
        <MenuItemLink
          to="/"
          target="_blank"
          className={dropdownItemClassName()}
        >
          Link
        </MenuItemLink>
      ),
    },
  ]

  const selectItems = [
    {
      key: 1,
      value: 1,
      label: 'Label 1',
      disabled: false,
    },
    {
      key: 2,
      value: 2,
      label: 'Label 2',
      disabled: true,
    },
    {
      key: 3,
      value: 3,
      label: 'Label 3',
      disabled: false,
    },
  ]

  const [selectedValue, setSelectedValue] = useState<Nullable<number>>(null)

  return (
    <div className="gap-4 flex flex-col">
      <DropdownMenu
        items={dropdownItems}
        classNames={{
          button:
            'w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500',
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
              'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
          },
        }}
      />
      <SelectListbox
        selectedValue={selectedValue}
        defaultLabel="選択してください"
        items={selectItems}
        handleChange={setSelectedValue}
      />
    </div>
  )
}

export default App
