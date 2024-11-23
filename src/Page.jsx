import { useContext } from "react"
import MovieList from "./cine/MovieList"
import Footer from "./Footer"
import Header from "./Header"
import Sdidebar from "./Sdidebar"
import { ThemeContext } from "./context"

const Page = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header></Header>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sdidebar></Sdidebar>
                    <MovieList></MovieList>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Page