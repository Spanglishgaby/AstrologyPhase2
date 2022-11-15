import React from 'react';
import HeaderPage from './HeaderPage'
import PageContainer from './PageContainer';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar/> 
      <HeaderPage /> 
      <PageContainer/>
    </Router>
  );
}

export default App;
