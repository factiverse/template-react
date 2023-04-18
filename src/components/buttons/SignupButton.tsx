import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
    <button className="button__sign-up" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};

export default SignupButton;
