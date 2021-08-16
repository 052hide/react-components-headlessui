export type Props = {
  htmlType: 'button' | 'submit'
  disabled: boolean
  clickIntervalMillisecond: number
  classNames?: {
    base?: string
  }
  handleClick: () => void
}
