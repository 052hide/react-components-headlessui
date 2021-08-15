export type Props<T extends number | string> = {
  value: T | null
  disabled: boolean
  classNames?: {
    base?: string
    selected?: string
    active?: string
    disabled?: string
  }
}
