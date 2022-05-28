import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { RouteProps, useNavigate } from 'react-router-dom'

interface ProtectedRouteProps extends RouteProps {
  component: JSX.Element
  allowedRoles: Array<string>
}

export const ProtectedRoute = ({
  component,
  allowedRoles
}: ProtectedRouteProps) => {
  const navigate = useNavigate()
  const { isAuthenticated, loginWithRedirect, getIdTokenClaims, isLoading } =
    useAuth0()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    async function getRolesUser(): Promise<Array<string>> {
      const idToken = await getIdTokenClaims()
      return idToken ? idToken[import.meta.env.VITE_APP_AUTH0_ROLE_URL] : []
    }
    async function checkRoles(roles: Array<string>) {
      const rolesUser = await getRolesUser()
      const isAuthorized = roles.every(role => {
        return rolesUser.includes(role)
      })
      if (isAuthorized) {
        setIsAuthorized(true)
      } else {
        navigate('/')
      }
    }

    if (!isLoading) {
      if (isAuthenticated) {
        checkRoles(allowedRoles)
      } else {
        loginWithRedirect()
      }
    }
  }, [getIdTokenClaims, isAuthenticated])

  if (isAuthorized) {
    return component
  } else {
    return null
  }
}
