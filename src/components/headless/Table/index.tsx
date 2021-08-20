import React from 'react'
import Row from './Row'
import Column from './Column'
import { Props } from './type'

const zIndexClassNames = {
  fixedHeader: 'z-20',
}

export const Component = (props: Props): JSX.Element => {
  const tableWidth = () => {
    return props.configColumns.reduce(
      (sum, configColumn) => sum + configColumn.width,
      0
    )
  }

  return (
    <div className="h-full">
      <div className="h-full">
        <div className="overflow-x-auto overflow-y-scroll max-h-full">
          <table
            className="min-w-full table-fixed"
            style={{ width: `${tableWidth()}px` }}
          >
            <colgroup>
              {props.configColumns.map((configColumn) => (
                <col
                  key={configColumn.key}
                  style={{ width: `${configColumn.width}px` }}
                />
              ))}
            </colgroup>
            <thead className={`sticky top-0 ${zIndexClassNames.fixedHeader}`}>
              <Row>
                {props.configColumns.map((configColumn) => (
                  <Column
                    key={configColumn.key}
                    dataColKey={configColumn.key}
                    isHeader={true}
                    fixed={
                      configColumn.fixed && {
                        position: configColumn.fixed.position,
                        margin: configColumn.fixed.margin,
                      }
                    }
                  >
                    {props.headerColumns[configColumn.key].children
                      ? props.headerColumns[configColumn.key].children
                      : props.headerColumns[configColumn.key].value}
                  </Column>
                ))}
              </Row>
            </thead>
            <tbody>
              {props.rows.map((row) => (
                <Row key={row.key} dataRowKey={row.key}>
                  {props.configColumns.map((configColumn) => (
                    <Column
                      key={configColumn.key}
                      dataColKey={configColumn.key}
                      fixed={
                        configColumn.fixed && {
                          position: configColumn.fixed.position,
                          margin: configColumn.fixed.margin,
                        }
                      }
                    >
                      {row.columns[configColumn.key].children
                        ? row.columns[configColumn.key].children
                        : row.columns[configColumn.key].value}
                    </Column>
                  ))}
                </Row>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Component
