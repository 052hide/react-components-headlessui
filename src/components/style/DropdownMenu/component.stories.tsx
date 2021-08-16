import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropdownMenu from './'

export default {
  title: 'style/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    button: {
      type: 'object',
    },
    items: { type: 'object' },
    block: { type: 'boolean' },
  },
} as ComponentMeta<typeof DropdownMenu>

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
)

export const Default = Template.bind({})
Default.args = {
  button: {
    children: 'Dropdown',
  },
  items: [
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
  ],
  block: false,
}
