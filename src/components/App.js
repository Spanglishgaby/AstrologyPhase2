import React from 'react';
import Header from './Header'
import PageContainer from './PageContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header /> 
      <PageContainer/>
    </Router>
  );
}

export default App;
