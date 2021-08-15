import React, { useState } from 'react'
import type { Nullable } from '~/types/common'
import DropdownMenu from '~/components/headless/DropdownMenu'
import MenuItemText from '~/components/headless/DropdownMenu/menuItems/MenuItemText'
import MenuItemButton from '~/components/headless/DropdownMenu/menuItems/MenuItemButton'
import MenuItemLink from '~/components/headless/DropdownMenu/menuItems/MenuItemLink'
import SelectListbox from '~/components/headless/SelectListbox'

const App: React.FC = (): JSX.Element => {
  const dropdownItems = [
    { key: 1, element: <MenuItemText>AAAA</MenuItemText> },
    { key: 2, element: <MenuItemButton>BBBB</MenuItemButton> },
    {
      key: 3,
      element: (
        <MenuItemLink to="/" target="_blank">
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
      <DropdownMenu items={dropdownItems} />
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
