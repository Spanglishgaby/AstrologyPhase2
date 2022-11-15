import React from 'react';
import HeaderPage from './HeaderPage'
import PageContainer from './PageContainer';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <HeaderPage /> 
      <PageContainer/>
    </Router>
  );
}

export default App;
