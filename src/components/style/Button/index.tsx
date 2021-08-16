import React from 'react'
import { classNames } from '~/helpers/css'
import Button from '~/components/headless/Button'
import { Props } from './type'
import {
  themeClassNames,
  sizeClassNames,
  widthClassNames,
  disabledClassNames,
} from './helper'

const Component: React.FC<Props> = (props) => {
  return (
    <Button
      {...props}
      classNames={{
        base: classNames([
          'relative flex-none border border-transparent shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
          themeClassNames(props.theme, props.disabled),
          sizeClassNames(props.size),
          widthClassNames(props.block),
          disabledClassNames(props.disabled),
        ]),
      }}
    >
      {props.children}
      {props.block && props.loading && (
        <span className="absolute inset-y-0 right-0 flex flex-row justify-center items-center px-4">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
    </Button>
  )
}

export default Component
