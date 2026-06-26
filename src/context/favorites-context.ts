import { createContext } from 'react'

export interface FavoritesContextValue {
  favoriteIds: string[]
  toggleFavorite: (recipeId: string) => void
  isFavorite: (recipeId: string) => boolean
}

export const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
)