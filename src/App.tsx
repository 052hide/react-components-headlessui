import React, { useState } from 'react'
import type { Nullable } from '~/types/common'
import type { Props as DropdownMenuProps } from '~/components/style/DropdownMenu/type'
import type { Props as SelectListboxProps } from '~/components/style/SelectListbox/type'
import Button from '~/components/style/Button'
import DropdownMenu from '~/components/style/DropdownMenu'
import SelectListbox from '~/components/style/SelectListbox'

const dropdownItems: DropdownMenuProps['items'] = [
  {
    key: 1,
    children: 'Button',
    elementType: 'button',
  },
  {
    key: 2,
    children: 'Link',
    elementType: 'link',
    to: '/',
    target: '_blank',
  },
  {
    key: 3,
    children: 'Text',
    elementType: 'text',
  },
]

const selectItems: SelectListboxProps<number>['items'] = [
  {
    key: 0,
    children: 'Clear',
    value: null,
    disabled: false,
  },
  {
    key: 1,
    children: 'Label 1',
    value: 1,
    disabled: false,
  },
  {
    key: 2,
    children: 'Label 2',
    value: 2,
    disabled: true,
  },
  {
    key: 3,
    children: 'Label 3',
    value: 3,
    disabled: false,
  },
]

const App: React.FC = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<Nullable<number>>(null)

  const handleClick = () => {
    console.log('handleClick')
  }

  return (
    <div className="h-[2000px] gap-4 flex flex-col">
      <div>
        <Button handleClick={handleClick}>Button</Button>
      </div>
      <div>
        <DropdownMenu
          button={{
            children: 'Dropdown',
          }}
          items={dropdownItems}
        />
      </div>
      <div>
        <SelectListbox
          selectedValue={selectedValue}
          handleChange={setSelectedValue}
          button={{
            children: 'Select',
          }}
          items={selectItems}
        />
      </div>
    </div>
  )
}

export default App
