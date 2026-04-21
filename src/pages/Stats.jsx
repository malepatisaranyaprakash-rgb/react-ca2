import { useApp } from '../context/AppContext'

export default function Stats() {
  const { state } = useApp()

  const totalMovies = state.movies.length

  const watchedMovies = state.movies.filter(
    movie => movie.watched
  ).length

  const grouped = state.movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1
    return acc
  }, {})

  window.appState = {
    totalMovies,
    watchedMovies,
    grouped
  }

  return (
    <div>
      <h2>Stats</h2>

      <div data-testid="total-movies">
        Total Movies: {totalMovies}
      </div>

      <div data-testid="watched-movies">
        Watched Movies: {watchedMovies}
      </div>

      {Object.entries(grouped).map(([genre, count]) => (
        <div key={genre}>
          {genre}: {count}
        </div>
      ))}
    </div>
  )
}