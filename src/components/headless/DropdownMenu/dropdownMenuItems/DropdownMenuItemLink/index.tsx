import React from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '~/helpers/css'
import { Props } from './type'

export const Component: React.FC<Props> = (props) => {
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
