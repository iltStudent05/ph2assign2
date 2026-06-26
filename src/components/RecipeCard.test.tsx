import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { FavoritesProvider } from '../context/FavoritesProvider'
import type { Recipe } from '../types/recipe'
import { RecipeCard } from './RecipeCard'

const recipe: Recipe = {
  id: '100',
  title: 'Test Recipe',
  category: 'Dinner',
  image: 'https://placehold.co/300x200',
  ingredients: ['One', 'Two'],
  instructions: 'Cook it.',
  authorEmail: 'test@example.com',
}

describe('RecipeCard', () => {
  it('toggles favorite button text when clicked', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <FavoritesProvider>
          <RecipeCard recipe={recipe} />
        </FavoritesProvider>
      </MemoryRouter>,
    )

    const button = screen.getByRole('button', { name: /favorite/i })
    expect(button).toBeInTheDocument()

    await user.click(button)
    expect(screen.getByRole('button', { name: /unfavorite/i })).toBeInTheDocument()
  })
})
