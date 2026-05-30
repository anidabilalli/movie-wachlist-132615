import {useState} from "react";
import { movies as moviesData } from "../utils/movies.js";

function MoviesPage() {
    const [movies, setMovies] = useState(moviesData);
    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [genre, setGenre] = useState("")
    const[watched, setWatched] = useState(false)

    function addNewMovie() {
        if (title !== "" && director !== "") {
            const newMovie = {
                id: movies.length + 1,
                title: title,
                director: director,
                genre: genre,
                watched: watched,
            };

            setMovies((prevState) => {
                return [...prevState, newMovie];
            });

            setTitle("");
            setDirector("");
            setGenre("");
            setWatched(false);
        }
    }

    function toggleWatched(movie) {
        setMovies((prevState) => {
            return prevState.map((prevMovie) => {
                if (prevMovie.id === movie.id) {
                    return {...prevMovie, watched: !prevMovie.watched};
                }
                else return prevMovie;
            });
        });
    }

    function deleteMovie(movie) {
        setMovies((prevState) => {
            return prevState.filter((prevMovie) => prevMovie.id !== movie.id);
        });
    }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>

       <div className="flex flex-col gap-4 items-start border border-pink-500 rounded p-2 m-4">
           <input
           className="border border-gray-700"
           placeholder="Title..."
           type="text"
           name="title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           />
           <input
               className="border border-gray-700"
               placeholder="Director..."
               type="text"
               name="director"
               value={director}
               onChange={(e) => setDirector(e.target.value)}
           />
           <input
               className="border border-gray-700"
               placeholder="Genre..."
               type="text"
               name="genre"
               value={genre}
               onChange={(e) => setGenre(e.target.value)}
           />
           <label className="flex items-center gap-2">
               <input
                   type="checkbox"
                   name="watched"
                   checked={watched}
                   onChange={(e) => setWatched(e.target.checked)}
                   />
               Watched
               </label>
           <button
               onClick={addNewMovie}
               className="rounded bg-white font-bold text-pink-500 p-2 border-pink-700"
               >
               Add Movie
           </button>
       </div>
        <div className="m-2">
            {movies.map(movie => {
                    return (
                <div
                key={movie.id}
                className="border-pink-500 bg-pink-200 p-2 m-2 rounded">
                <div className="text-lg font-bold text-red-700">{movie.title}</div>
                <div>Director:{movie.director}</div>
                <div>Genre:{movie.genre}</div>
                <div>Status:{movie.watched ? 'Watched': 'Not Watched'}</div>

                    <button
                        onClick={() => toggleWatched(movie)}
                        className="rounded bg-white font-bold text-pink-500 p-2 border-pink-700"
                        >
                        Toggle Watched
                    </button>

                    <button
                        onClick={() => deleteMovie(movie)}
                        className="rounded bg-white font-bold text-pink-500 p-2 border-pink-700"
                        >
                        Delete
                    </button>
           </div>
            );
        })}
    </div>
</div>
  );
}

export default MoviesPage
