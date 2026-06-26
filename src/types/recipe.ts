export interface Recipe {
  id: string
  title: string
  category: string
  image: string
  ingredients: string[]
  instructions: string
  authorEmail: string
}

export interface RecipeFormValues {
  title: string
  category: string
  ingredients: string
  instructions: string
  authorEmail: string
}

export interface RecipeFormErrors {
  title?: string
  category?: string
  ingredients?: string
  instructions?: string
  authorEmail?: string
}
