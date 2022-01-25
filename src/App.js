import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './style/GlobalStyles';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
