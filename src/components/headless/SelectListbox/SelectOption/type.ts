export type Props<T extends number | string> = {
  value: T
  disabled: boolean
  classNames?: {
    base?: string
    selected?: string
    active?: string
    disabled?: string
  }
}
