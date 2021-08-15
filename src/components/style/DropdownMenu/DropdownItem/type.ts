export type Props<ElementType extends 'button' | 'link' | 'text'> = {
  elementType: ElementType
  to?: ElementType extends 'link' ? string : undefined
  target?: '_blank'
  classNames?: {
    base?: string
    active?: ElementType extends 'button' | 'link'
      ? string | undefined
      : undefined
  }
}
