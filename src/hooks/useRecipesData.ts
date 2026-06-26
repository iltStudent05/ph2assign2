import { useEffect, useState } from 'react'
import type { Recipe } from '../types/recipe'

interface UseRecipesDataResult {
  recipes: Recipe[]
  loading: boolean
  error: string | null
}

export function useRecipesData(): UseRecipesDataResult {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadRecipes() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('/recipes.json', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Failed to load recipe data.')
        }

        const data = (await response.json()) as Recipe[]
        setRecipes(data)
      } catch (err) {
        if ((err as DOMException).name !== 'AbortError') {
          setError('Could not load recipes. Please try again later.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadRecipes()

    return () => {
      controller.abort()
    }
  }, [])

  return { recipes, loading, error }
}
