import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AddRecipePage } from './pages/AddRecipePage'
import { HomePage } from './pages/HomePage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
