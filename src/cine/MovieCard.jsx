/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { getImgUrl } from "../utils/cine-utility.js"
import Rating from "./Rating.jsx"
import MovieDetailsModal from "./MovieDetailsModal.jsx";
import { MovieContext } from "../context/index.js";
const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // const { cardData, setCardData } = useContext(MovieContext);
    const { state, dispatch } = useContext(MovieContext);


    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    }

    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    }

    const handleAddToCard = (event, movie) => {
        event.stopPropagation();
        console.log(movie);

        const found = state.cardData.find((item) => {
            return item.id === movie.id;
        });
        if (!found) {
            // setCardData([...cardData, movie]);
            dispatch({
                type: "ADD_TO_CARD",
                payload: {
                    ...movie,
                }
            })
        } else {
            console.log(`The Movie ${movie.title} has been added to the card already!`)
        }
    }

    return (
        <>
            {
                showModal && (
                    <MovieDetailsModal
                        movie={selectedMovie}
                        onClose={handleModalClose}
                        onCardAdd={handleAddToCard}
                    />
                )
            }
            <figure id={movie.id} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="title" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating}></Rating>
                        </div>
                        <a onClick={(e) => handleAddToCard(e, movie)} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#">
                            <img src="./assets/tag.svg" alt="" />
                            <span>${movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </a>
            </figure>
        </>
    )
}

export default MovieCard