import React from 'react';

import Home from './pages/Home/index';
import GlobalStyles from './style/GlobalStyles';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <>
      <Header />
      <Section />
      <Home />
      <GlobalStyles />
    </>
  );
}

export default App;
