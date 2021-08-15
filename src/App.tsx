import React, { useState } from 'react'
import type { Nullable } from '~/types/common'
import DropdownMenu from '~/components/style/DropdownMenu'
import DropdownItem from '~/components/style/DropdownMenu/DropdownItem'
import SelectListbox from '~/components/headless/SelectListbox'

const App: React.FC = (): JSX.Element => {
  const dropdownItemClassName = () => {
    return 'w-full block py-2 px-4 text-sm text-left'
  }
  const dropdownItems = [
    {
      key: 4,
      element: (
        <DropdownItem
          elementType="button"
          classNames={{ base: dropdownItemClassName(), active: 'bg-blue-100' }}
        >
          Button
        </DropdownItem>
      ),
    },
    {
      key: 1,
      element: (
        <DropdownItem
          elementType="text"
          classNames={{ base: dropdownItemClassName() }}
        >
          Text
        </DropdownItem>
      ),
    },
    {
      key: 2,
      element: (
        <DropdownItem
          elementType="button"
          classNames={{ base: dropdownItemClassName(), active: 'bg-blue-100' }}
        >
          Button
        </DropdownItem>
      ),
    },
    {
      key: 3,
      element: (
        <DropdownItem
          elementType="link"
          to="/"
          target="_blank"
          classNames={{ base: dropdownItemClassName(), active: 'bg-blue-100' }}
        >
          Link
        </DropdownItem>
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
    <div className="h-[2000px] gap-4 flex flex-col">
      <DropdownMenu button={'Dropdown'} items={dropdownItems} />
      <SelectListbox
        selectedValue={selectedValue}
        defaultLabel="選択してください"
        items={selectItems}
        handleChange={setSelectedValue}
        classNames={{
          self: '',
          item: {
            base: 'transition-colors duration-150',
            selected: 'text-blue-800',
            active: 'bg-blue-100',
            disabled: 'bg-gray-100 opacity-50',
          },
        }}
      />
    </div>
  )
}

export default App
