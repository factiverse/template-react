import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../helloWorld/HelloWorld';
import { css } from '@emotion/react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const App = () => {
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
      <div>
        <Link to="/RouterTest">
          Route to different pages with react-dom-router
        </Link>
      </div>
      <br></br>
      {/* json-server example */}
      <div>
        Mock an API by using db.json and running a local server with{' '}
        <b>npm run server</b>: {exampleData}
      </div>
      <br></br>
      {/* icons example using https://phosphoricons.com/ */}
      <div>
        Use Phosphor icons or{' '}
        <a href="https://mui.com/material-ui/material-icons/">
          Matrial UI icons
        </a>
        :<i className="ph-alien-light" style={{ color: 'hotpink' }}></i>
        <AccessAlarmIcon />
      </div>
    </>
  );
};

export default App;
