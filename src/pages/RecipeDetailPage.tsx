import { Link, useParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { useFavorites } from '../context/useFavorites'
import { useRecipesData } from '../hooks/useRecipesData'

export function RecipeDetailPage() {
  const { id } = useParams()
  const { recipes, loading, error } = useRecipesData()
  const { isFavorite, toggleFavorite } = useFavorites()

  if (loading) {
    return <p>Loading recipe...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  const recipe = recipes.find((item) => item.id === id)

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to recipes</Link>
      </div>
    )
  }

  return (
    <Card title={recipe.title}>
      <img src={recipe.image} alt={recipe.title} width={350} height={220} />
      <p>Category: {recipe.category}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <p>Author: {recipe.authorEmail}</p>
      <button type="button" onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite(recipe.id) ? 'Unfavorite' : 'Favorite'}
      </button>
    </Card>
  )
}
