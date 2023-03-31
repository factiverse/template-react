import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App/App';
import { Auth0Provider } from '@auth0/auth0-react';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container as Element);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-on-lc56a.us.auth0.com"
      clientId="lCEQ7MOgmWvFNYgwRc96lSzRaPguw0Yc"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="RouterTest" element={<div>This is a routed page</div>} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
