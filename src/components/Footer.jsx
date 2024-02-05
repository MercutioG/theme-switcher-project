import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={(theme) ? 'dark': 'light'}>
      <div>
        <p>there is lots of good info here</p><br/>
        <p>there is lots of good info here</p><br/>
        <p>there is lots of good info here</p><br/>
        <p>there is lots of good info here</p>
      </div>
      <div>
        <p>there is lots of bad info here</p><br/>
        <p>there is lots of bad info here</p><br/>
        <p>there is lots of bad info here</p><br/>
        <p>there is lots of bad info here</p>
      </div>
      <div>
        <p>there is lots of grumpy info here</p><br/>
        <p>there is lots of grumpy info here</p><br/>
        <p>there is lots of grumpy info here</p><br/>
        <p>there is lots of grumpy info here</p>
      </div>
    </footer>
  )
}

export default Footer