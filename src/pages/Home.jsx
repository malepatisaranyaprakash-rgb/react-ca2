import { useState } from 'react'
import { useApp } from '../context/AppContext'
import MovieCard from '../components/MovieCard'

export default function Home() {
  const { state, dispatch } = useApp()

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [genre, setGenre] = useState('Drama')

  function handleSubmit(e) {
    e.preventDefault()

    if (!/^[A-Za-z ]+$/.test(name)) return
    if (!/^[0-9]{4}$/.test(year)) return

    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        id: Date.now(),
        name,
        year,
        genre,
        watched: false
      }
    })

    setName('')
    setYear('')
    setGenre('Drama')
  }

  return (
    <div>
      <h2>Home</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Movie Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />

        <input
          placeholder="Genre"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />

        <button type="submit">Add Movie</button>
      </form>

      {state.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}