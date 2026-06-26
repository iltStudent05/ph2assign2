import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { FavoritesProvider } from '../context/FavoritesProvider'
import { Layout } from './Layout'

describe('Layout', () => {
  it('renders navigation links and children content', () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <Layout>
            <p>Page content</p>
          </Layout>
        </FavoritesProvider>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /recipes/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /add recipe/i })).toBeInTheDocument()
    expect(screen.getByText('Page content')).toBeInTheDocument()
  })
})
