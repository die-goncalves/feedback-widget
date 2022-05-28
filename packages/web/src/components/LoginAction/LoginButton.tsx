import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className="bg-brand hover:bg-brand-hover group h-8 px-3 rounded-[0.5rem] outline-none border-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition-all duration-300 ease-out"
      onClick={() => loginWithRedirect()}
    >
      <span className="text-text-on-brand-color text-[1rem] leading-[1.5rem] font-regular">
        Entrar
      </span>
    </button>
  )
}
