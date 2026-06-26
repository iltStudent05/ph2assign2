import { useState } from 'react'
import { Card } from '../components/Card'
import { RecipeForm } from '../components/RecipeForm'
import type { Recipe, RecipeFormValues } from '../types/recipe'

export function AddRecipePage() {
  const [submittedRecipe, setSubmittedRecipe] = useState<Recipe | null>(null)

  function handleCreateRecipe(values: RecipeFormValues) {
    const nextRecipe: Recipe = {
      id: crypto.randomUUID(),
      title: values.title,
      category: values.category,
      ingredients: values.ingredients.split(',').map((item) => item.trim()),
      instructions: values.instructions,
      authorEmail: values.authorEmail,
      image: 'https://placehold.co/600x400?text=New+Recipe',
    }

    setSubmittedRecipe(nextRecipe)
  }

  return (
    <div>
      <Card title="Add Recipe">
        <RecipeForm onSubmit={handleCreateRecipe} />
      </Card>

      {submittedRecipe ? (
        <Card title="Latest Submission">
          <p>
            <strong>{submittedRecipe.title}</strong> was captured successfully.
          </p>
          <p>Category: {submittedRecipe.category}</p>
          <p>Author: {submittedRecipe.authorEmail}</p>
        </Card>
      ) : null}
    </div>
  )
}
