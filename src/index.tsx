import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloWorld/HelloWorld';

const App = () => <HelloWorld />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
