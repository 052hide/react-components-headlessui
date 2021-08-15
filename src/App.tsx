import React, { useState } from 'react'
import type { Nullable } from '~/types/common'
import type { Props as SelectListboxProps } from '~/components/headless/SelectListbox/type'
import SelectListbox from '~/components/style/SelectListbox'

const itemClassNames = () => ({
  base: 'transition-colors duration-150',
  selected: 'text-blue-800',
  active: 'bg-blue-100',
  disabled: 'bg-gray-100 opacity-50',
})

const selectItems: SelectListboxProps<number>['items'] = [
  {
    key: 0,
    children: 'Clear',
    value: null,
    disabled: false,
    classNames: itemClassNames(),
  },
  {
    key: 1,
    children: 'Label 1',
    value: 1,
    disabled: false,
    classNames: itemClassNames(),
  },
  {
    key: 2,
    children: 'Label 2',
    value: 2,
    disabled: true,
    classNames: itemClassNames(),
  },
  {
    key: 3,
    children: 'Label 3',
    value: 3,
    disabled: false,
    classNames: itemClassNames(),
  },
]

const App: React.FC = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<Nullable<number>>(null)

  return (
    <div className="h-[2000px] gap-4 flex flex-col">
      <SelectListbox
        selectedValue={selectedValue}
        handleChange={setSelectedValue}
        button={{
          children: 'Select',
        }}
        items={selectItems}
      />
    </div>
  )
}

export default App
