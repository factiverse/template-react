import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthenticationGuard } from '../AuthenticationGuard/AuthenticationGuard';
import { LoadingPage } from '../pages/LoadingPage';
import ProfilePage from '../pages/ProfilePage';

const App = () => {
  // display loading page while Auth0 is authenticating the user
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="page-layout">
        <p>is loading...</p>
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="RouterTest" element={<div>This is a routed page</div>} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route
        path="Protected"
        element={<AuthenticationGuard component={LoadingPage} />}
      />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default App;
