import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './'

export default {
  title: 'style/Button',
  component: Button,
  argTypes: {
    htmlType: {
      type: 'select',
      options: ['button', 'submit'],
    },
    disabled: { type: 'boolean' },
    clickIntervalMillisecond: { type: 'number' },
    block: { type: 'boolean' },
    loading: { type: 'boolean' },
    theme: { type: 'select', options: ['primary', 'secondary'] },
    size: { type: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl'] },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  const handleClick = () => {
    window.alert('clicked')
  }

  return <Button {...{ ...args, handleClick }} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  htmlType: 'button',
  disabled: false,
  clickIntervalMillisecond: 500,
  block: false,
  loading: false,
  theme: 'primary',
  size: 'base',
}
