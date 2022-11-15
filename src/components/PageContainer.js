import Reviews from "./Reviews";
import SignCollection from "./SignCollection";
import SignForm from "./SignForm";
import React, { useEffect, useState } from "react";


function PageContainer() {

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
    setReviews([...reviews, addReview])
  }

  return (
    <div>
      
      <SignCollection sunSign={sunSign} />
      <SignForm />
      {/* <div>
          <ul>
            {
              reviews.map(reviewData => (
                 <li>{reviewData.review}</li>
              ))
            }
          </ul>
      </div> */}
      <Reviews reviews={reviews} addReview={addReview} />


    </div>
  )

}
export default PageContainer;