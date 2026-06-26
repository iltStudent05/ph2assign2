import type { Recipe } from '../types/recipe'
import { RecipeCard } from './RecipeCard'

interface RecipeListProps {
  recipes: Recipe[]
}

export function RecipeList({ recipes }: RecipeListProps) {
  return (
    <section aria-label="Recipe list" className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  )
}
