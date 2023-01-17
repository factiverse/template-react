import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../helloWorld/HelloWorld';
import { css } from '@emotion/react';

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

  const color = 'white';

  return (
    <>
      <HelloWorld />
      {/* Material UI example */}
      <Typography>Material UI Typography</Typography>
      {/* Emotion example */}
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      {/* react-router-dom example */}
      <div>
        <Link to="/RouterTest">react-dom-router test</Link>
      </div>
      {/* json-server example */}
      <div>Author from db.json: {exampleData}</div>
      {/* icons example using https://phosphoricons.com/ */}
      <div>
        <i className="ph-alien-light" style={{ color: 'hotpink' }}></i>
      </div>
    </>
  );
};

export default App;
