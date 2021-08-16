import React, { PropsWithChildren } from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'

export const Component = (props: PropsWithChildren<Props>): JSX.Element => {
  const targetAttributes =
    props.target === '_blank'
      ? {
          target: '_blank',
          rel: 'noreferrer',
        }
      : {}

  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={props.to}
          {...targetAttributes}
          className={classNames([
            props.classNames?.base || 'block w-full text-left',
            active ? props.classNames?.active || '' : '',
          ])}
        >
          {props.children}
        </a>
      )}
    </Menu.Item>
  )
}

export default Component
