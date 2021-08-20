import React, { PropsWithChildren } from 'react'
import { Props } from './type'

export const Component = (props: PropsWithChildren<Props>): JSX.Element => {
  const HtmlTagName: keyof JSX.IntrinsicElements = props.isHeader ? 'th' : 'td'

  return (
    <HtmlTagName
      data-col-key={props.dataColKey}
      className={`${props.isHeader ? 'bg-gray-50' : 'bg-white'} ${
        props.fixed?.position && 'sticky'
      }`}
      style={{
        left:
          props.fixed?.position === 'left'
            ? `${props.fixed.margin || 0}px`
            : undefined,
        right:
          props.fixed?.position === 'right'
            ? `${props.fixed.margin || 0}px`
            : undefined,
      }}
    >
      {props.children}
    </HtmlTagName>
  )
}

Component.defaultProps = {
  isHeader: false,
}

export default Component
