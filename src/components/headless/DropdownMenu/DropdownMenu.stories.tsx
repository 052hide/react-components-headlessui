import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropdownMenu from './'
import MenuItemButton from './menuItems/MenuItemButton'
import MenuItemLink from './menuItems/MenuItemLink'
import MenuItemText from './menuItems/MenuItemText'

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

const dropdownItemClassName = () => {
  return 'block px-4 py-2 text-sm'
}
export const Default = Template.bind({})
Default.args = {
  items: [
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
  ],
}
