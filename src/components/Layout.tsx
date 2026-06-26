import { NavLink } from 'react-router-dom'
import { useFavorites } from '../context/useFavorites'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { favoriteIds } = useFavorites()

  return (
    <div className="app-shell">
      <header className="header">
        <h1>Recipe Browser</h1>
        <nav aria-label="Main">
          <NavLink to="/">Recipes</NavLink>
          <NavLink to="/add">Add Recipe</NavLink>
        </nav>
        <p className="favorites-counter">Favorites: {favoriteIds.length}</p>
      </header>
      <main>{children}</main>
    </div>
  )
}
