import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecipeForm } from './RecipeForm'

describe('RecipeForm', () => {
  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    render(<RecipeForm onSubmit={onSubmit} />)

    await user.click(screen.getByRole('button', { name: /save recipe/i }))

    expect(screen.getByText('Title is required.')).toBeInTheDocument()
    expect(screen.getByText('Email is required.')).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('shows email format validation for invalid email value', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    render(<RecipeForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/title/i), 'Tomato Soup')
    await user.type(screen.getByLabelText(/category/i), 'Dinner')
    await user.type(screen.getByLabelText(/ingredients/i), 'Tomato, Garlic')
    await user.type(screen.getByLabelText(/instructions/i), 'Blend and simmer')
    await user.type(screen.getByLabelText(/author email/i), 'invalid-email')

    await user.click(screen.getByRole('button', { name: /save recipe/i }))

    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
