import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HeaderPage from './HeaderPage'
// import PageContainer from './PageContainer';
import Reviews from "./Reviews";
import SignForm from "./SignForm";
import SignCollection from "./SignCollection";
import ErrorPage from './Error';
import 'semantic-ui-css/semantic.min.css'
import { Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import Horoscope from './Horoscope';


function App() {
// testing
  const [sunSign, setSunSign] = useState([])
  const [reviews, setReviews] = useState([])
  ////sunsign
  useEffect(() => {
    fetch('http://localhost:4000/sunsign')
      .then(r => r.json())
      .then(signData => setSunSign(signData))
  }, [])
////reviews
  useEffect(() => {
    fetch('http://localhost:4000/reviews')
      .then(r => r.json())
      .then(reviewData => setReviews(reviewData))
  }, [])

  const addReview = (newReview) => {
    setReviews([...reviews,  newReview])
  }

  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path = '/'>
          <HeaderPage />
          <SignCollection sunSign={sunSign} />
        </Route>
        <Route exact path = '/sunsign'>
          <SignCollection sunSign={sunSign} />
        </Route>
        <Route path = '/horoscope'>
          <Horoscope />
        </Route>
        <Route exact path = '/compatibility'>
          <SignForm />
        </Route>
        <Route path = '/reviews'>
          <Reviews reviews={reviews} addReview={addReview} />
        </Route>
        <Route path = "*">
          <ErrorPage/>
        </Route>
    </Switch>
    <Footer/>
    </div>

  );
}

export default App;
