export type Props = {
  dataColKey: string
  fixed?: {
    position: 'left' | 'right'
    margin: number
  }
  isHeader: boolean
  classNames?: {
    base?: string
  }
}
