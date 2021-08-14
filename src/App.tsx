import React from 'react'
import DropdownMenu from '~/components/headless/DropdownMenu'
import MenuItemText from '~/components/headless/DropdownMenu/menuItems/MenuItemText'
import MenuItemButton from '~/components/headless/DropdownMenu/menuItems/MenuItemButton'
import MenuItemLink from '~/components/headless/DropdownMenu/menuItems/MenuItemLink'

const App: React.FC = (): JSX.Element => {
  const items = [
    { key: 1, element: <MenuItemText>AAAA</MenuItemText> },
    { key: 2, element: <MenuItemButton>BBBB</MenuItemButton> },
    {
      key: 3,
      element: (
        <MenuItemLink to="/" target="_blank">
          Link
        </MenuItemLink>
      ),
    },
  ]

  return <DropdownMenu items={items} />
}

export default App
