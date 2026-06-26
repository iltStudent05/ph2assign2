import { useState } from 'react'
import type { RecipeFormErrors, RecipeFormValues } from '../types/recipe'

interface RecipeFormProps {
  onSubmit: (values: RecipeFormValues) => void
}

const initialValues: RecipeFormValues = {
  title: '',
  category: '',
  ingredients: '',
  instructions: '',
  authorEmail: '',
}

export function RecipeForm({ onSubmit }: RecipeFormProps) {
  const [values, setValues] = useState<RecipeFormValues>(initialValues)
  const [errors, setErrors] = useState<RecipeFormErrors>({})

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setValues((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function validate(currentValues: RecipeFormValues) {
    const nextErrors: RecipeFormErrors = {}

    if (!currentValues.title.trim()) {
      nextErrors.title = 'Title is required.'
    }
    if (!currentValues.category.trim()) {
      nextErrors.category = 'Category is required.'
    }
    if (!currentValues.ingredients.trim()) {
      nextErrors.ingredients = 'Ingredients are required.'
    }
    if (!currentValues.instructions.trim()) {
      nextErrors.instructions = 'Instructions are required.'
    }
    if (!currentValues.authorEmail.trim()) {
      nextErrors.authorEmail = 'Email is required.'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(currentValues.authorEmail)) {
      nextErrors.authorEmail = 'Enter a valid email address.'
    }

    return nextErrors
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    onSubmit(values)
    setValues(initialValues)
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" value={values.title} onChange={handleChange} />
      {errors.title ? <p role="alert">{errors.title}</p> : null}

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        value={values.category}
        onChange={handleChange}
      />
      {errors.category ? <p role="alert">{errors.category}</p> : null}

      <label htmlFor="ingredients">Ingredients (comma separated)</label>
      <textarea
        id="ingredients"
        name="ingredients"
        value={values.ingredients}
        onChange={handleChange}
      />
      {errors.ingredients ? <p role="alert">{errors.ingredients}</p> : null}

      <label htmlFor="instructions">Instructions</label>
      <textarea
        id="instructions"
        name="instructions"
        value={values.instructions}
        onChange={handleChange}
      />
      {errors.instructions ? <p role="alert">{errors.instructions}</p> : null}

      <label htmlFor="authorEmail">Author Email</label>
      <input
        id="authorEmail"
        name="authorEmail"
        value={values.authorEmail}
        onChange={handleChange}
      />
      {errors.authorEmail ? <p role="alert">{errors.authorEmail}</p> : null}

      <button type="submit">Save Recipe</button>
    </form>
  )
}
