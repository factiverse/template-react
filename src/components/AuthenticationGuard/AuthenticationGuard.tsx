import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const AuthenticationGuard = ({ isAllowed, children, returnTo }) => {
  const { loginWithRedirect } = useAuth0();

  if (!isAllowed) {
    loginWithRedirect({
      appState: {
        returnTo: returnTo
      }
    });
  }

  return children ? (
    children
  ) : (
    <>
      <h1>page not found</h1>
    </>
  );
};
