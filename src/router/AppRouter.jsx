import { Routes, Route, NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Stats from '../pages/Stats'

export default function AppRouter() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/favorites">Favorites</NavLink> |{" "}
        <NavLink to="/stats">Stats</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  )
}