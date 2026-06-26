import { Link } from 'react-router-dom'
import { useFavorites } from '../context/useFavorites'
import type { Recipe } from '../types/recipe'
import { Card } from './Card'

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(recipe.id)

  return (
    <Card>
      <article>
        <img src={recipe.image} alt={recipe.title} width={220} height={140} />
        <h3>{recipe.title}</h3>
        <p>Category: {recipe.category}</p>
        <div className="card-actions">
          <Link to={`/recipes/${recipe.id}`}>View details</Link>
          <button type="button" onClick={() => toggleFavorite(recipe.id)}>
            {favorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      </article>
    </Card>
  )
}
