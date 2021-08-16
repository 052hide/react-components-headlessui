import { OmitClassNames } from '~/types/common'
import type {
  Props as DropdownMenuProps,
  Item,
} from '~/components/headless/DropdownMenu/type'

export type Props = {
  button: OmitClassNames<DropdownMenuProps['button']>
  itemsWrapperTransition?: OmitClassNames<
    DropdownMenuProps['itemsWrapperTransition']
  >
  itemsWrapper?: OmitClassNames<DropdownMenuProps['itemsWrapper']>
  items: OmitClassNames<Item>[]
  block: boolean
}
