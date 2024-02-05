import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const MainContent = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <article className={(theme) ? 'dark': 'light'}>
      <p>I can sing a song</p>
    </article>
  )
}

export default MainContent