import { OmitClassNames } from '~/types/common'
import type {
  Props as SelectListboxProps,
  Item,
} from '~/components/headless/SelectListbox/type'

export type Props<T extends number | string> = {
  selectedValue: SelectListboxProps<T>['selectedValue']
  handleChange: SelectListboxProps<T>['handleChange']
  button: OmitClassNames<SelectListboxProps<T>['button']>
  itemsWrapperTransition?: OmitClassNames<
    SelectListboxProps<T>['itemsWrapperTransition']
  >
  itemsWrapper?: OmitClassNames<SelectListboxProps<T>['itemsWrapper']>
  items: OmitClassNames<Item>[]
  block: boolean
}
