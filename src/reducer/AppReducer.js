export const initialState = {
  movies: [],
  favorites: []
}

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload }

    case 'ADD_MOVIE':
      return { ...state, movies: [...state.movies, action.payload] }

    case 'DELETE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      }

    case 'TOGGLE_WATCHED':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload
            ? { ...movie, watched: !movie.watched }
            : movie
        )
      }

    case 'TOGGLE_FAV':
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      }

    default:
      return state
  }
}