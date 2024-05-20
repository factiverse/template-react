import React, { ReactNode, useEffect, useState } from 'react';
import { updateAPI } from '../services/API/api.service';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingPage from '../components/pages/LoadingPage';

interface APIWrapperProps {
  children: ReactNode;
}

const APIWrapper: React.FC<APIWrapperProps> = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const [isReady, setIsReady] = useState(false);
  // updates the access token
  useEffect(() => {
    async function fetch() {
      try {
        const token = await getAccessTokenSilently();
        await updateAPI(undefined, token);
      } catch (error) {
        console.error('user not logged in');
      }
    }
    fetch().then(() => setIsReady(true));
  }, [getAccessTokenSilently, isAuthenticated]);

  if (!isReady) {
    return <LoadingPage />;
  }
  return <>{children}</>;
};

export default APIWrapper;
