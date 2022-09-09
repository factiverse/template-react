import React from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../helloWorld/HelloWorld';

const App = () => {
  return (
    <>
      <HelloWorld />
      <Link to="/RouterTest">react-dom-router test</Link>
    </>
  );
};

export default App;
