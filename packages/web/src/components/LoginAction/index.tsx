import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './LoginButton'
import { MenuButton } from './MenuButton'

export function LoginAction() {
  const { isAuthenticated } = useAuth0()

  return <>{!isAuthenticated ? <LoginButton /> : <MenuButton />}</>
}
