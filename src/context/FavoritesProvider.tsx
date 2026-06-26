import { useLocalStorage } from '../hooks/useLocalStorage'
import { FavoritesContext } from './favorites-context'

interface FavoritesProviderProps {
  children: React.ReactNode
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favoriteIds, setFavoriteIds] = useLocalStorage<string[]>(
    'favorite-recipe-ids',
    [],
  )

  function toggleFavorite(recipeId: string) {
    setFavoriteIds((current) =>
      current.includes(recipeId)
        ? current.filter((id) => id !== recipeId)
        : [...current, recipeId],
    )
  }

  function isFavorite(recipeId: string) {
    return favoriteIds.includes(recipeId)
  }

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}