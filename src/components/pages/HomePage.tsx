import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HelloWorld from '../helloWorld/HelloWorld';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LoginButton from '../buttons/LoginButton';
import SignupButton from '../buttons/SignupButton';
import LogoutButton from '../buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage = () => {
  // json-server example:
  const [exampleData, setExampleData] = useState('');
  useEffect(() => {
    async function fetchData() {
      const data = await (
        await fetch('http://localhost:3000/posts', {
          method: 'GET',
        })
      ).json();
      setExampleData(data[0].author);
    }
    fetchData();
  }, []);

  // Auth0 authentication, is true if the user is logged in
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <h1>Check App.tsx for feature examples:</h1>
      <br></br>
      {/* Component/localization example */}
      <HelloWorld />
      <br></br>
      {/* Material UI example */}
      <Typography>Use Material UI components to quickly build UI</Typography>
      <br></br>
      {/* Emotion example */}
      <div
        css={css`
          background-color: darkgreen;
          color: white;
          &:hover {
            background-color: hotpink;
          }
        `}
      >
        Use Emotion to style elements: Hover to change color.
      </div>
      <br></br>
      {/* react-router-dom example */}
      <p>
        <Link to="/RouterTest">
          Route to different pages with react-dom-router
        </Link>
      </p>
      {/* json-server example */}
      <p>
        Mock an API by using db.json and running a local server with{' '}
        <b>npm run server</b>: {exampleData}
      </p>
      {/* icons example using https://phosphoricons.com/ */}
      <p>
        Use Phosphor icons or{' '}
        <a href="https://mui.com/material-ui/material-icons/">
          Material UI icons
        </a>
        :<i className="ph-alien-light" style={{ color: 'hotpink' }}></i>
        <AccessAlarmIcon />
      </p>
      {/* Edit authConfig.json to set up Auth0 for your app */}
      {!isAuthenticated && (
        <>
          <p>User is not logged in</p>
          <p>
            <SignupButton />
          </p>
          <p>
            <LoginButton />
          </p>
        </>
      )}
      {isAuthenticated && (
        <>
          <p>User is logged in</p>
          <p>
            <LogoutButton />
          </p>
        </>
      )}
      <p>
        <NavLink to="/protected">
          Protected page (can only be accessed when authenticated)
        </NavLink>
      </p>
      <p>
        <NavLink to="/profile">
          Profile page showing user info from Auth0
        </NavLink>
      </p>
    </>
  );
};

export default HomePage;
