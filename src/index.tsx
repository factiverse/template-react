import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxWithLabel from './checkboxWithLabel';
import Link from './link.react';

const App = () => (
  <h1>My React and TypeScript App!! {new Date().toLocaleDateString()}</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
    <br />
    <Link page="http://www.facebook.com">Facebook</Link>
  </React.StrictMode>,
  document.getElementById('root')
);