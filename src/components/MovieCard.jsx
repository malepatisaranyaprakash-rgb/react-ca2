import { useApp } from '../context/AppContext'

export default function MovieCard({ movie }) {
  const { state, dispatch } = useApp()

  const isFav = state.favorites.includes(movie.id)

  return (
    <div data-testid="movie-item">
      <h3>{movie.name}</h3>
      <p>{movie.year}</p>
      <p>{movie.genre}</p>

      <button
        onClick={() =>
          dispatch({
            type: 'TOGGLE_WATCHED',
            payload: movie.id
          })
        }
      >
        {movie.watched ? 'Watched' : 'Unwatched'}
      </button>

      <button
        onClick={() =>
          dispatch({
            type: 'TOGGLE_FAV',
            payload: movie.id
          })
        }
      >
        {isFav ? 'Remove Fav' : 'Add Fav'}
      </button>

      <button
        onClick={() =>
          dispatch({
            type: 'DELETE_MOVIE',
            payload: movie.id
          })
        }
      >
        Delete
      </button>
    </div>
  )
}