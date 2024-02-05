import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <header className={(theme) ? 'dark': 'light'}>
      <h1>Welcome to the goofy zone</h1>
      <h3>We hope you enjoy your stay</h3>
    </header>
  )
}

export default Header