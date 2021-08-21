import React from 'react'
import {
  Props as TableProps,
  Columns as TableColumns,
  Column as TableColumn,
} from '~/components/headless/Table/type'
import Table from '~/components/headless/Table'
import { Props } from './type'

const baseColumnClassName = () => 'py-2 px-4 text-sm truncate'

const headerColumnClassName = () =>
  `${baseColumnClassName()} text-center font-bold bg-gray-100`

const bodyColumnClassName = () => `${baseColumnClassName()} bg-white`

const Component = (props: Props): JSX.Element => {
  const headerColumns: TableColumns = {}
  Object.keys(props.headerColumns).forEach((key) => {
    headerColumns[key] = {
      ...(props.headerColumns[key] as TableColumn),
      classNames: { base: headerColumnClassName() },
    }
  })

  const rows: TableProps['rows'] = props.rows.map((row) => {
    const columns: TableColumns = {}
    Object.keys(row.columns).forEach((key) => {
      columns[key] = {
        ...(row.columns[key] as TableColumn),
        classNames: {
          base: bodyColumnClassName(),
        },
      }
    })
    return {
      ...row,
      columns,
    }
  })

  return (
    <Table
      configColumns={props.configColumns}
      headerColumns={headerColumns}
      rows={rows}
    />
  )
}

Component.defaultProps = {
  htmlType: 'button',
  disabled: false,
  clickIntervalMillisecond: 200,
  block: false,
  loading: false,
  theme: 'primary',
  size: 'base',
}

export default Component
