import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
  const {theme, changeTheme} = useContext(ThemeContext)
  return (
    <nav className={(theme) ? 'dark': 'light'}>
      <h1>THE COMPANY</h1>
      <button className='switch-btn' onClick={() => changeTheme()}>Switch Themes</button>
    </nav>
  )
}

export default Navbar