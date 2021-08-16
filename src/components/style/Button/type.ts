import { OmitClassNames } from '~/types/common'
import type { Props as ButtonProps } from '~/components/headless/Button/type'

export type Props = OmitClassNames<ButtonProps> & {
  block: boolean
  loading: boolean
  theme: 'primary' | 'secondary'
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}
