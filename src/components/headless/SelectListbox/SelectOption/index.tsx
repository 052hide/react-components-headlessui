import React, { PropsWithChildren } from 'react'
import { Listbox } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'

export const Component = <T extends number | string>(
  props: PropsWithChildren<Props<T>>
): JSX.Element => {
  return (
    <Listbox.Option
      value={props.value}
      disabled={props.disabled}
      className={({ selected, active, disabled }) =>
        classNames([
          props.classNames?.base || '',
          selected && props.value !== null ? props.classNames?.selected || '' : '',
          active ? props.classNames?.active || '' : '',
          disabled ? props.classNames?.disabled || '' : '',
        ])
      }
    >
      {props.children}
    </Listbox.Option>
  )
}

export default Component
