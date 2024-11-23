import { useReducer, useState } from 'react'
import { MovieContext, ThemeContext } from './context'
import Page from './Page'
import { cardReducer, initialState } from "../src/reducers/cardReducer.js"
function App() {
  // const [cardData, setCardData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cardReducer, initialState)

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {/* <MovieContext.Provider value={{ cardData, setCardData }}> */}
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page></Page>
          {/* </MovieContext.Provider> */}
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
