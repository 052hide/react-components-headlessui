import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'

export const Component = <T extends number | string>(
  props: Props<T>
): JSX.Element => {
  const selectedLabel = () => {
    return (
      props.items.find((item) => item.value === props.selectedValue)?.label ||
      props.defaultLabel
    )
  }

  return (
    <Listbox
      as="div"
      value={props.selectedValue}
      onChange={props.handleChange}
      className={classNames([
        'relative inline-block',
        props.classNames?.self || '',
      ])}
    >
      <Listbox.Button
        className={classNames(['text-left', props.classNames?.button || ''])}
      >
        {selectedLabel()}
      </Listbox.Button>
      <Transition as={Fragment} {...props.classNames?.items?.transition}>
        <Listbox.Options
          className={classNames([
            'absolute mt-2 left-0 min-w-[10rem] bg-white focus:outline-none',
            props.classNames?.items?.content || '',
          ])}
        >
          {props.items.map((item) => (
            <Listbox.Option
              key={item.key}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}

export default Component
