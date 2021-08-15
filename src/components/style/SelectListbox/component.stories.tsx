import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectListbox from './'

export default {
  title: 'style/SelectListbox',
  component: SelectListbox,
  argTypes: {
    button: { control: 'object' },
    items: { control: 'object' },
  },
} as ComponentMeta<typeof SelectListbox>

const Template: ComponentStory<typeof SelectListbox> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    null
  )

  return (
    <SelectListbox
      {...{ ...args, selectedValue, handleChange: setSelectedValue }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  button: {
    children: 'Select',
  },
  items: [
    {
      key: 1,
      value: 1,
      children: 'Option 1',
      disabled: false,
    },
    {
      key: 2,
      value: 2,
      children: 'Option 2',
      disabled: true,
    },
    {
      key: 3,
      value: 3,
      children: 'Option 3',
      disabled: false,
    },
  ],
}
