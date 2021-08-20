import React, { PropsWithChildren } from 'react'
import { Props } from './type'

export const Component = (props: PropsWithChildren<Props>): JSX.Element => {
  return <tr data-row-key={props.dataRowKey || undefined}>{props.children}</tr>
}

export default Component
