import { OmitClassNames } from '~/types/common'
import type {
  Props as TableProps,
  Column as TableColumn,
} from '~/components/headless/Table/type'

export type Columns = {
  [key: string]: OmitClassNames<TableColumn>
}

export type Row = {
  key: string
  columns: Columns
}

export type Props = {
  configColumns: TableProps['configColumns']
  headerColumns: Columns
  rows: Row[]
}
