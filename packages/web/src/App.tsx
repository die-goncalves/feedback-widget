import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from 'react-router-dom'
import { Loading } from './components/Loading'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Feedbacks } from './pages/feedbacks'
import { Home } from './pages/home'

export function App() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="feedbacks"
        element={
          <ProtectedRoute
            component={<Feedbacks />}
            allowedRoles={['Administrador']}
          />
        }
      />
    </Routes>
  )
}
