import { useState } from 'react'
import MovieList from './cine/MovieList'
import { MovieContext } from './context'
import Footer from './Footer'
import Header from './Header'
import Sdidebar from './Sdidebar'
function App() {
  const [cardData, setCardData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <Header></Header>
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sdidebar></Sdidebar>
            <MovieList></MovieList>
          </div>
        </main>
        <Footer></Footer>
      </MovieContext.Provider>
    </>
  )
}

export default App
