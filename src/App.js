import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyle from "./styles/GlobalStyles";
function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle/>
    </>
  );
}

export default App;
