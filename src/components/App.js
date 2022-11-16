import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HeaderPage from './HeaderPage'
import PageContainer from './PageContainer';
import Reviews from "./Reviews";
import SignForm from "./SignForm";
import SignCollection from "./SignCollection";
import 'semantic-ui-css/semantic.min.css'
import { Switch, Route} from 'react-router-dom';


function App() {

  const [sunSign, setSunSign] = useState([])
  const [reviews, setReviews] = useState([])
  ////sunsign
  useEffect(() => {
    fetch('http://localhost:3001/sunsign')
      .then(r => r.json())
      .then(signData => setSunSign(signData))
  }, [])
////reviews
  useEffect(() => {
    fetch('http://localhost:3001/Reviews')
      .then(r => r.json())
      .then(reviewData => setReviews(reviewData))
  }, [])

  const addReview = (newReview) => {
    setReviews([...reviews,  newReview])
  }

  return (
    <div>
      <Navbar/>
      <HeaderPage />
      <Switch>
        <Route exact path = '/sunsign'>
          <SignCollection sunSign={sunSign} />
        </Route>
        {/* <Route path = '/about'>
          <About />
        </Route> */}
        <Route path = '/compatibilty'>
          <SignForm />
        </Route>
        <Route path = '/reviews'>
          <Reviews reviews={reviews} addReview={addReview} />
        </Route>
        <Route path = "*">
          <h1> 404 not found</h1>
        </Route>
    </Switch>
    </div>

  );
}

export default App;
