import React, { useState } from 'react'
import type { Nullable } from '~/types/common'
import type { Props as DropdownMenuProps } from '~/components/style/DropdownMenu/type'
import type { Props as SelectListboxProps } from '~/components/style/SelectListbox/type'
import Button from '~/components/style/Button'
import DropdownMenu from '~/components/style/DropdownMenu'
import SelectListbox from '~/components/style/SelectListbox'
import Table from '~/components/style/Table'
import { Props as TableProps, Row } from '~/components/headless/Table/type'

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
    col_0: { value: 'Column 0' },
    col_1: { value: 'Column 1' },
    col_2: { value: 'Column 2' },
    col_3: { value: 'Column 3' },
    col_4: { value: 'Date' },
    col_5: { value: 'DateTIME' },
    col_6: { value: 'Column 6' },
    col_7: { value: 'Column 7' },
    col_8: { value: 'Column 8' },
    col_9: {
      children: (
        <p className="p-x border border-solid border-gray-300">Action</p>
      ),
    },
  }
}

const rows = (): TableProps['rows'] => {
  const row = (index: number): Row => ({
    key: `row_${index}`,
    columns: {
      col_0: { value: `Row ${index} Column 0` },
      col_1: { value: `Row ${index} Column 1` },
      col_2: { value: `Row ${index} Column 2` },
      col_3: { value: `Row ${index} Column 3` },
      col_4: { value: 1609471845, format: 'date' },
      col_5: { value: 1609471845, format: 'datetime' },
      col_6: { value: `Row ${index} Column 6` },
      col_7: { value: `Row ${index} Column 7` },
      col_8: { value: `Row ${index} Column 8` },
      col_9: {
        children: (
          <button className="p-2 border border-solid border-gray-300">
            Row {index} Action
          </button>
        ),
      },
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
      <div className="w-[800px] h-[300px] overflow-x-auto">
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
