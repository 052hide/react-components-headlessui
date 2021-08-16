import React, { PropsWithChildren, MouseEvent, useState } from 'react'
import { Props } from './type'

export const Component = (props: PropsWithChildren<Props>): JSX.Element => {
  const [waiting, setWaiting] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (_e: MouseEvent<HTMLButtonElement>) => {
    if (props.clickIntervalMillisecond > 0) {
      setWaiting(true)
      setTimeout(() => {
        setWaiting(false)
      }, 500) // 二度押し防止
    }
    props.handleClick()
  }

  return (
    <button
      type={props.htmlType}
      disabled={props.disabled || waiting}
      className={props.classNames?.base || 'relative inline-block'}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}

export default Component
