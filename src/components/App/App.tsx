import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../helloWorld/HelloWorld';

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
      <HelloWorld />
      <div>
        <Link to="/RouterTest">react-dom-router test</Link>
      </div>
      <div>
        <Link to="/posts">json-server test</Link>
      </div>
      <div>Author from db.json: {exampleData}</div>
    </>
  );
};

export default App;
