import { useApp } from '../context/AppContext'
import MovieCard from '../components/MovieCard'

export default function Favorites() {
  const { state } = useApp()

  const favMovies = state.movies.filter(movie =>
    state.favorites.includes(movie.id)
  )

  return (
    <div>
      <h2>Favorites</h2>

      {favMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}