import React, { useState } from 'react'
import type { Nullable } from '~/types/common'
import type { Props as DropdownMenuProps } from '~/components/style/DropdownMenu/type'
import type { Props as SelectListboxProps } from '~/components/style/SelectListbox/type'
import Button from '~/components/style/Button'
import DropdownMenu from '~/components/style/DropdownMenu'
import SelectListbox from '~/components/style/SelectListbox'
import FixedColumnsHeaderTable from '~/components/headless/tables/FixedColumnsHeaderTable'
import Column from '~/components/headless/tables/Column'
import { Props as TableProps } from '~/components/headless/tables/FixedColumnsHeaderTable/type'

const configColumns = (): TableProps['configColumns'] => {
  return [
    {
      key: '1',
      width: 100,
      fixed: {
        position: 'left',
        margin: 0,
      },
    },
    {
      key: '2',
      width: 100,
      fixed: {
        position: 'left',
        margin: 100,
      },
    },
    { key: '3', width: 150 },
    { key: '4', width: 150 },
    { key: '5', width: 150 },
    { key: '6', width: 150 },
    { key: '7', width: 150 },
    { key: '8', width: 150 },
    { key: '9', width: 150 },
    {
      key: '10',
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
    '1': (
      <Column
        key="1"
        dataColKey="1"
        isHeader={true}
        fixed={{ position: 'left', margin: 0 }}
      >
        Column 1
      </Column>
    ),
    '2': (
      <Column
        key="2"
        dataColKey="2"
        isHeader={true}
        fixed={{ position: 'left', margin: 100 }}
      >
        Column 2
      </Column>
    ),
    '3': (
      <Column key="3" dataColKey="3" isHeader={true}>
        Column 3
      </Column>
    ),
    '4': (
      <Column key="4" dataColKey="4" isHeader={true}>
        Column 4
      </Column>
    ),
    '5': (
      <Column key="5" dataColKey="5" isHeader={true}>
        Column 5
      </Column>
    ),
    '6': (
      <Column key="6" dataColKey="6" isHeader={true}>
        Column 6
      </Column>
    ),
    '7': (
      <Column key="7" dataColKey="7" isHeader={true}>
        Column 7
      </Column>
    ),
    '8': (
      <Column key="8" dataColKey="8" isHeader={true}>
        Column 8
      </Column>
    ),
    '9': (
      <Column key="9" dataColKey="9" isHeader={true}>
        Column 9
      </Column>
    ),
    '10': (
      <Column
        key="name"
        dataColKey="name"
        isHeader={true}
        fixed={{ position: 'right', margin: 0 }}
      >
        Column 10
      </Column>
    ),
  }
}

const rows = (): TableProps['rows'] => {
  const row = {
    key: '0',
    columns: {
      '1': (
        <Column key="1" dataColKey="1" fixed={{ position: 'left', margin: 0 }}>
          Edrward 0
        </Column>
      ),
      '2': (
        <Column
          key="2"
          dataColKey="2"
          fixed={{ position: 'left', margin: 100 }}
        >
          32
        </Column>
      ),
      '3': (
        <Column key="3" dataColKey="3">
          Column 3
        </Column>
      ),
      '4': (
        <Column key="4" dataColKey="4">
          Column 4
        </Column>
      ),
      '5': (
        <Column key="5" dataColKey="5">
          Column 5
        </Column>
      ),
      '6': (
        <Column key="6" dataColKey="6">
          Column 6
        </Column>
      ),
      '7': (
        <Column key="7" dataColKey="7">
          Column 7
        </Column>
      ),
      '8': (
        <Column key="8" dataColKey="8">
          Column 8
        </Column>
      ),
      '9': (
        <Column key="9" dataColKey="9">
          Column 9
        </Column>
      ),
      '10': (
        <Column
          key="10"
          dataColKey="10"
          fixed={{ position: 'right', margin: 0 }}
        >
          <a>action</a>
        </Column>
      ),
    },
  }
  return [...Array(10)].map(() => row)
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
        <FixedColumnsHeaderTable
          configColumns={configColumns()}
          headerColumns={headerColumns()}
          rows={rows()}
        />
      </div>
    </div>
  )
}

export default App
