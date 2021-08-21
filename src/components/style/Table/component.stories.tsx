import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Row } from './type'
import Table from './'

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

export default {
  title: 'style/Table',
  component: Table,
  argTypes: {
    configColumns: {
      type: 'array',
    },
    headerColumns: { type: 'object' },
    rows: { type: 'array' },
  },
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} />
}

export const Default = Template.bind({})
Default.args = {
  configColumns: [
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
  ],
  headerColumns: {
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
  },
  rows: [...Array(10)].map((_, i) => row(i)),
}
