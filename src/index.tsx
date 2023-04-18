import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';
import { Auth0ProviderWithNavigate } from './services/Auth/Auth0ProviderWithNavigate';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container as Element);

root.render(
  <React.StrictMode>
    {/* Use if deployed to Github Pages: <Router basename="/template-react"> */}
    <Router>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </Router>
  </React.StrictMode>
);
