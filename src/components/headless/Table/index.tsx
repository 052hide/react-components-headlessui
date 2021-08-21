import React from 'react'
import Row from './Row'
import Column from './Column'
import { Props } from './type'

const zIndexClassNames = {
  fixedHeader: 'z-20',
}

const formattedValue = (
  value?: string | number | boolean,
  format?: 'date' | 'datetime' | 'array'
) => {
  if (!format) {
    return value
  }

  if (
    (format === 'date' || format === 'datetime') &&
    typeof value === 'number'
  ) {
    const date = new Date(value * 1000)
    return (
      date.toLocaleDateString('ja-JP') +
      (format === 'datetime' ? ` ${date.toLocaleTimeString('ja-JP')}` : '')
    )
  }

  return value
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
            className="min-w-full table-fixed border-none"
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
              <Row classNames={{ base: 'shadow' }}>
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
                    classNames={
                      props.headerColumns[configColumn.key].classNames
                    }
                  >
                    {props.headerColumns[configColumn.key].children ||
                      formattedValue(
                        props.headerColumns[configColumn.key].value,
                        props.headerColumns[configColumn.key].format
                      )}
                  </Column>
                ))}
              </Row>
            </thead>
            <tbody>
              {props.rows.map((row, i) => (
                <Row
                  key={row.key}
                  dataRowKey={row.key}
                  classNames={
                    i !== 0
                      ? { base: 'border-t border-solid border-gray-300' }
                      : undefined
                  }
                >
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
                      classNames={row.columns[configColumn.key].classNames}
                    >
                      {row.columns[configColumn.key].children ||
                        formattedValue(
                          row.columns[configColumn.key].value,
                          row.columns[configColumn.key].format
                        )}
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
