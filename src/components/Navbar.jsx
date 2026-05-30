import { Link } from 'react-router-dom'
import {useAuth} from "../context/AuthContext.jsx"

function Navbar() {
    const {user, logout}= useAuth()
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg">Movie Watchlist</Link>
      <div className="flex gap-4 text-sm">
          {
              user ? (
                  <>
                      <span>Welcome, {user.name}</span>
                      <button on onClick={logout} className="hover:underline">Logout</button>
                  </>
              ) : (

                  <Link to="/login" className="hover:underline">Login</Link>
              )}
          </div>
      </nav>
  )
}

export default Navbar
