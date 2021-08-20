import React, { useState } from 'react'
import type { Nullable } from '~/types/common'
import type { Props as DropdownMenuProps } from '~/components/style/DropdownMenu/type'
import type { Props as SelectListboxProps } from '~/components/style/SelectListbox/type'
import Button from '~/components/style/Button'
import DropdownMenu from '~/components/style/DropdownMenu'
import SelectListbox from '~/components/style/SelectListbox'
import Table from '~/components/headless/Table'
import { Props as TableProps } from '~/components/headless/Table/type'

const configColumns = (): TableProps['configColumns'] => {
  return [
    {
      key: 'col_0',
      width: 100,
      fixed: {
        position: 'left',
        margin: 0,
      },
    },
    {
      key: 'col_1',
      width: 100,
      fixed: {
        position: 'left',
        margin: 100,
      },
    },
    { key: 'col_2', width: 150 },
    { key: 'col_3', width: 150 },
    { key: 'col_4', width: 150 },
    { key: 'col_5', width: 150 },
    { key: 'col_6', width: 150 },
    { key: 'col_7', width: 150 },
    { key: 'col_8', width: 150 },
    {
      key: 'col_9',
      width: 150,
      fixed: {
        position: 'right',
        margin: 0,
      },
    },
  ]
}

const headerColumns = (): TableProps['headerColumns'] => {
  return {
    col_0: <p>Column 0</p>,
    col_1: <p>Column 1</p>,
    col_2: <p>Column 2</p>,
    col_3: <p>Column 3</p>,
    col_4: <p>Column 4</p>,
    col_5: <p>Column 5</p>,
    col_6: <p>Column 6</p>,
    col_7: <p>Column 7</p>,
    col_8: <p>Column 8</p>,
    col_9: <p>Column 9</p>,
  }
}

const rows = (): TableProps['rows'] => {
  const row = (index: number) => ({
    key: `row_${index}`,
    columns: {
      col_0: <p>Row {index} Column 0</p>,
      col_1: <p>Row {index} Column 1</p>,
      col_2: <p>Row {index} Column 2</p>,
      col_3: <p>Row {index} Column 3</p>,
      col_4: <p>Row {index} Column 4</p>,
      col_5: <p>Row {index} Column 5</p>,
      col_6: <p>Row {index} Column 6</p>,
      col_7: <p>Row {index} Column 7</p>,
      col_8: <p>Row {index} Column 8</p>,
      col_9: (
        <button className="p-2 border border-solid border-gray-300">
          Row {index} Action
        </button>
      ),
    },
  })
  return [...Array(10)].map((_, i) => row(i))
}

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
      <div className="w-[800px] h-[100px] overflow-x-auto">
        <Table
          configColumns={configColumns()}
          headerColumns={headerColumns()}
          rows={rows()}
        />
      </div>
    </div>
  )
}

export default App
