import { useState } from 'react'
import { MovieContext, ThemeContext } from './context'
import Page from './Page'
function App() {
  const [cardData, setCardData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cardData, setCardData }}>
          <Page></Page>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
