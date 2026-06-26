import { Link } from 'react-router-dom'
import { RecipeList } from '../components/RecipeList'
import { useRecipesData } from '../hooks/useRecipesData'

export function HomePage() {
  const { recipes, loading, error } = useRecipesData()

  if (loading) {
    return <p>Loading recipes...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  return (
    <div>
      <div className="page-heading">
        <h2>All Recipes</h2>
        <Link to="/add">Create a recipe</Link>
      </div>
      <RecipeList recipes={recipes} />
    </div>
  )
}
