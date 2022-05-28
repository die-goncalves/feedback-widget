import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { scopesString } from './utils/scopes'

import './main.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        audience={import.meta.env.VITE_APP_AUTH0_AUDIENCE}
        scope={scopesString}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
)
