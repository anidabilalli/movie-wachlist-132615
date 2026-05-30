import {movies} from "../utils/movies.js"

function MoviesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>
        {
            movies.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                        <p>Director:{movie.director}</p>
                        <p>Genre:{movie.genre}</p>
                        <p>Status:{movie.watched ? 'Watched': 'Not Watched'}</p>
                </div>
            ))
        }
    </div>
  )
}

export default MoviesPage
