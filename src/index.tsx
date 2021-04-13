import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hellloWorld/HelloWorld';

const App = () => <HelloWorld />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
