import { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer, initialState } from '../reducer/AppReducer'

const AppContext = createContext()
export const useApp = () => useContext(AppContext)

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    try {
      const url = 'https://t4e-testserver.onrender.com/api'

      // Step 1: Token
      const tokenRes = await fetch(`${url}/public/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: 'E0323018',
          set: 'setA',
          password: '849794'
        })
      })

      const tokenData = await tokenRes.json()

      const token = tokenData.token
      const dataUrl = tokenData.dataUrl

      // Step 2: Dataset
      const dataRes = await fetch(`${url}${dataUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const orders = await dataRes.json()

      dispatch({
        type: 'SET_MOVIES',
        payload: orders
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}