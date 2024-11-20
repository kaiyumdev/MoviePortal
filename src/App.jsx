import Header from './Header'
import Sdidebar from './Sdidebar'
function App() {

  return (
    <>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sdidebar></Sdidebar>
        </div>
      </main>
    </>
  )
}

export default App
