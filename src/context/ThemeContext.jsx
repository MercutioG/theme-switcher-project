import React, { useState } from 'react'

const ThemeContext = React.createContext()

const ContextAPI = ({children}) => {
  const [theme, setTheme] = useState(true)
  const changeTheme = () => {
    setTheme(!theme)
    console.log(theme)
  }

  return(
    <ThemeContext.Provider value={{changeTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

// export const useTheme = () => {
//   const context = useContext(ThemeContext)
//   return context
// }
export {ContextAPI, ThemeContext}