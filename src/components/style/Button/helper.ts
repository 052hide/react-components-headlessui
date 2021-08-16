import { Props } from './type'

export const themeClassNames = (
  theme: Props['theme'],
  disabled: Props['disabled']
): string => {
  if (theme === 'primary') {
    return `bg-indigo-600 text-white ${
      disabled ? '' : 'hover:bg-indigo-700 focus:ring-indigo-500'
    }`
  } else if (theme === 'secondary') {
    return `text-indigo-700 bg-indigo-100 ${
      disabled ? '' : 'hover:bg-indigo-200 focus:ring-indigo-500'
    }`
  } else {
    return ''
  }
}

export const sizeClassNames = (size: Props['size']): string => {
  if (size === 'xs') {
    return 'px-2.5 py-1.5 text-xs rounded'
  } else if (size === 'sm') {
    return 'px-3 py-2 text-sm leading-4 rounded-md'
  } else if (size === 'base') {
    return 'px-4 py-2 text-sm rounded-md'
  } else if (size === 'lg') {
    return 'px-4 py-2 text-base rounded-md'
  } else if (size === 'xl') {
    return 'px-6 py-3 text-base rounded-md'
  } else {
    return ''
  }
}

export const widthClassNames = (block: Props['block']): string => {
  return block ? 'flex flex-row justify-center items-center w-full' : ''
}

export const disabledClassNames = (disabled: Props['disabled']): string => {
  return disabled ? 'opacity-50 cursor-not-allowed' : ''
}
