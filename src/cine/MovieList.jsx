/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { getAllMovies } from "../data/movies"
import MovieCard from "./MovieCard.jsx";

//MovieList component
const MovieList = () => {
    const movies = getAllMovies();
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}></MovieCard>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList