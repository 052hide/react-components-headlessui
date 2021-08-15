import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropdownMenu from './'
import DropdownMenuItemButton from './dropdownMenuItems/DropdownMenuItemButton'
import DropdownMenuItemLink from './dropdownMenuItems/DropdownMenuItemLink'
import DropdownMenuItemText from './dropdownMenuItems/DropdownMenuItemText'

export default {
  title: 'headless/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    items: { control: 'object' },
  },
} as ComponentMeta<typeof DropdownMenu>

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
)

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      key: 1,
      element: <DropdownMenuItemText>Text</DropdownMenuItemText>,
    },
    {
      key: 2,
      element: <DropdownMenuItemButton>Button</DropdownMenuItemButton>,
    },
    {
      key: 3,
      element: (
        <DropdownMenuItemLink to="/" target="_blank">
          Link
        </DropdownMenuItemLink>
      ),
    },
  ],
}
